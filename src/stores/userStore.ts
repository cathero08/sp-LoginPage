import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { API_FBLOGIN_Response } from '@/stores/modal';


export const userStore = defineStore('user',{
  state: () => ({
    fbLoginInfo: {} as API_FBLOGIN_Response ,
    fbName: '',
  }),
  actions: {

  }
})
