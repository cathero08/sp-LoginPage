<template>

<div>
  <el-button @click="onSignin">Google登入</el-button>
  <el-button @click="onSignout">Google登出</el-button>
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


// const googleInfo:API_GOOGLELOGIN_Response = reactive({
//   iss: '', // The JWT's issuer
//   nbf:  0,
//   aud: '', // Your server's client ID
//   sub: '', // The unique ID of the user's Google Account
//   hd: '', // If present, the host domain of the user's GSuite email address
//   email: '', // The user's email address
//   email_verified: true, // true, if Google has verified the email address
//   azp: '',
//   name: '',
//   picture: '', // If present, a URL to user's profile picture
//   given_name: '',
//   family_name: '',
//   iat: 0, // Unix timestamp of the assertion's creation time
//   exp: 0, // Unix timestamp of the assertion's expiration time
//   jti: ''
// });
const googleInfo = ref();

const handleCredentialResponse = (res: any) => {
  console.log('googlej jwt', jwt_decode(res.credential));
  googleInfo.value = jwt_decode(res.credential)
}

const onSignin = () => {
  google.accounts.id.prompt();
}
const onSignout = () => {
  google.accounts.id.disableAutoSelect();
}

onMounted(()=> {
  google.accounts.id.initialize({
    client_id: '736590708524-hoa5jlkd9ruess896ds1i6coiiavdrjg.apps.googleusercontent.com',
    callback: handleCredentialResponse
  });
})
</script>
<style lang='scss' scope>
</style>