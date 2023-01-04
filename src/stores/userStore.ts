import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { systemStore } from "@/stores/systemStore";
import type { API_FBLOGIN_Response } from "@/stores/modal";
import { ElMessage } from 'element-plus'

export const userStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    fbLoginInfo: {},
    navUser: { name: "", photo: "" },
  }),
  actions: {
    // 判斷是否登入
    AllLoginStatus() {
      // 回調狀態
      FB.getLoginStatus((response) => {
        // See the onlogin handler// 查看 onlogin 处理程序
        if (response.status === "connected") {
          this.FiltersPlatform("FB", response);
        }
      });
    },
    // 判斷使用哪一種登入
    FiltersPlatform(platform: String, response: fb.StatusResponse) {
      switch (platform) {
        case "FB":
          this.isLogin = true;
          // @ts-ignore
          FB.api("/me", { fields: "id,name,email,picture" }, (response: TResponse) => {
            console.log(response);
            const SystemStore = systemStore();
            SystemStore.login_fromModal = false;
            this.navUser.name = response.name;
            this.navUser.photo = response.picture.data.url;
          });
          break;
        default:
          console.log("Sorry, we are out of ");
      }
    },
    // 登出
    LogOut() {
      FB.logout((response) => {
        this.isLogin = false;
      });
      ElMessage({
        message: '已登出',
        type: 'success',
      })
    }
  },
});
