import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const systemStore = defineStore("system", {
  state: () => ({
    // 登入modal
    login_fromModal: false,
    isMob: false,
  }),
  actions: {
    getDevice() {
      // 控制768px
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          this.isMob = true;
          return;
        }
        this.isMob = false;
      });
      if (window.innerWidth < 768) {
        this.isMob = true;
        return;
      }
      this.isMob = false;
    },
  },
});
