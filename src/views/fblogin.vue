<template>
<div>
  <el-button type="primary" @click="checkLoginState">FB登入紐</el-button>
  <el-button @click="LogOut">FB登出紐</el-button>
</div>
<!-- <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div> -->

</template>

<script  lang="ts" setup>
import { ref } from 'vue';
import type {API_FBLOGIN_Response} from '@/stores/modal'
import {userStore} from '@/stores/userStore';

const UserStore = userStore();
const fbstatus = ref('');

// @ts-ignore 檢查登入資訊
FB.getLoginStatus(function(response) {   // See the onlogin handler// 查看 onlogin 处理程序
  statusChangeCallback(response);
});

const LogOut = () => {
  // @ts-ignore
  FB.logout(function(response) {
    // Person is now logged out
    console.log(response,"登出")
  });
}
// 登入拿fb token
function checkLoginState() {               // Called when a person is finished with the Login Button.当一个人完成登录按钮时调用。
  (window as any).fbAsyncInit();
  // @ts-ignore
  FB.login(function(response){
    // handle the response 
    UserStore.fbLoginInfo = response;
      // @ts-ignore
    FB.getLoginStatus(function(response) {   // See the onlogin handler// 查看 onlogin 处理程序
      statusChangeCallback(response);
    });
  });
}

function statusChangeCallback(response: API_FBLOGIN_Response) {  // Called with the results from FB.getLoginStatus().// 使用 FB.getLoginStatus() 的结果调用。
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.// 该人的当前登录状态。
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.// 登录到您的网页和 Facebook。
    testAPI();
  } else {                                 // Not logged into your webpage or we are unable to tell.// 未登录您的网页或我们无法判断。
    fbstatus.value = 'Please log ' +
      'into this webpage.';
  }
}

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.// 登录后测试 Graph API。 有关何时进行此调用，请参阅 statusChangeCallback()。
  console.log('Welcome!  Fetching your information.... ');
  // @ts-ignore
  FB.api('/me', function(response) {
    UserStore.fbName = response.name;
    console.log('hi',response.name);
  });
}

</script>
<style lang='scss' scope>
</style>