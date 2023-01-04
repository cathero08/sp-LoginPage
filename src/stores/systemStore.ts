import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const systemStore = defineStore('system',{
  state: () => ({
    // 登入modal
    login_fromModal: false,
  }),
  actions: {}
})
