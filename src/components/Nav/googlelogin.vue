<template>

<div>
  <el-button @click="client.requestCode()">Google登入</el-button>
  <el-button @click="onSignout">Google登出</el-button>
  <el-button @click="meapi">googletest</el-button>
  <div v-if="googleInfo?.name">
    <div>name: {{googleInfo.name}}</div>
    <div>name: {{googleInfo.email}}</div>
    <img :src="googleInfo.picture">

  </div>
</div>
</template>

<script lang="ts" setup>
import {onMounted, ref, reactive} from 'vue';
import jwt_decode from "jwt-decode";
import type {API_GOOGLELOGIN_Response} from "@/stores/modal"
import axios from 'axios';

const googleInfo = ref();
const tokenlist = ref();

const meapi = async() => {
  console.log(tokenlist.value);
  const res = axios({
    method: 'get',
    url: `https://people.googleapis.com/v1/people/me`,
    headers: {
      authorization: `Bearer ${tokenlist.value.access_token}`,
    },
    params: {
      sources:'READ_SOURCE_TYPE_PROFILE',
      personFields: 'names,photos,emailAddresses',
      key: 'AIzaSyD1IO13UzkH9GAq8mZpKEtfoJMvPHw1RA0'
    }
  })
  console.log(res);
}

const handleCredentialResponse = async(res: any) => {
  console.log(res);
  // console.log('googlej jwt', jwt_decode(res.credential));
  // googleInfo.value = jwt_decode(res.credential)
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
      redirect_uri: 'https://localhost:5173',
      grant_type: 'authorization_code',
    }
  })
  return tokenlist.value = resToken?.data;
}

const onSignin = () => {
}
const onSignout = () => {
  google.accounts.id.disableAutoSelect();
}

const client = google.accounts.oauth2.initCodeClient({
  client_id: '736590708524-hoa5jlkd9ruess896ds1i6coiiavdrjg.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/calendar.readonly',
  ux_mode: 'popup',
  redirect_uri: 'https://localhost:5173/sp-LoginPage/',
  callback: handleCredentialResponse,
});

onMounted(()=> {

})
</script>
<style lang='scss' scope>
</style>