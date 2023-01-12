import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { systemStore } from "@/stores/systemStore";
import type { API_FBLOGIN_Response } from "@/stores/modal";
import axios from "axios";
import { ElMessage } from "element-plus";

export const userStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    fbLoginInfo: {},
    loginplace: "",
    navUser: { name: "", photo: "", email: "" },
  }),
  actions: {
    // 判斷是否登入
    AllLoginStatus() {
      // 回調狀態
      FB.getLoginStatus(async (response) => {
        // See the onlogin handler// 查看 onlogin 处理程序
        if (response.status === "connected") {
          this.FiltersPlatform("FB", response);
        } else {
          // 先看FB再看google
          if (localStorage.getItem("loginN")) {
            let i = JSON.parse(localStorage.getItem("loginN") || "");

            const res = await axios({
              method: "get",
              url: `https://people.googleapis.com/v1/people/me`,
              headers: {
                authorization: `Bearer ${i.access_token}`,
              },
              params: {
                sources: "READ_SOURCE_TYPE_PROFILE",
                personFields: "names,photos,emailAddresses",
                key: "AIzaSyD1IO13UzkH9GAq8mZpKEtfoJMvPHw1RA0",
              },
            });
            console.log(res.data);
            setTimeout(() => {
              this.FiltersPlatform("GOOGLE", res.data);
            }, 800);
          }
        }
      });
    },
    // 判斷使用哪一種登入
    FiltersPlatform(platform: String, response: any) {
      switch (platform) {
        case "FB":
          this.isLogin = true;
          this.loginplace = "FB";
          // @ts-ignore
          FB.api("/me", { fields: "id,name,email,picture" }, (response: TResponse) => {
            const SystemStore = systemStore();
            SystemStore.login_fromModal = false;
            this.navUser.name = response.name;
            this.navUser.photo = response.picture.data.url;
          });
          break;
        case "GOOGLE":
          this.isLogin = true;
          this.loginplace = "GOOGLE";
          this.navUser.name = response.names[0].displayNameLastFirst;
          this.navUser.photo = response.photos[0].url;
          this.navUser.email = response.emailAddresses[0].value;
          break;
        default:
          console.log("Sorry, we are out of ");
      }
    },
    // 登出
    LogOut() {
      switch (this.loginplace) {
        case "FB":
          FB.logout((response) => {
            this.isLogin = false;
          });
          break;
        case "GOOGLE":
          google.accounts.id.disableAutoSelect();
          this.isLogin = false;
          break;
        default:
          break;
      }
      localStorage.removeItem("loginN");
      ElMessage({
        message: "已登出",
        type: "success",
      });
    },
  },
});
