<template>

<div>
  <el-button type="success" class="w-full" @click="client.requestCode()">Google登入</el-button>
</div>
</template>

<script lang="ts" setup>
import {onMounted, ref, reactive} from 'vue';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { userStore } from '@/stores/userStore';
import { systemStore } from '@/stores/systemStore';

const UserStore = userStore();
const SystemStore = systemStore();

const handleCredentialResponse = async(res: any) => {
  const resToken = await axios({
    method: 'post',
    url: 'https://oauth2.googleapis.com/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      code: res.code,
      client_id: '736590708524-hoa5jlkd9ruess896ds1i6coiiavdrjg.apps.googleusercontent.com',
      client_secret: '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',
      redirect_uri: process.env.NODE_ENV === 'development' ? 'https://localhost:5173' : 'https://cathero08.github.io/sp-LoginPage/',
      grant_type: 'authorization_code',
    }
  })
  localStorage.setItem('loginN', JSON.stringify(resToken?.data));
  SystemStore.login_fromModal = false;
  return UserStore.AllLoginStatus();
}

const client = google.accounts.oauth2.initCodeClient({
  client_id: '736590708524-hoa5jlkd9ruess896ds1i6coiiavdrjg.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/calendar.readonly',
  ux_mode: 'popup',
  redirect_uri: 'https://localhost:5173/sp-LoginPage/',
  callback: handleCredentialResponse,
});

</script>
<style lang='scss' scope>
</style>