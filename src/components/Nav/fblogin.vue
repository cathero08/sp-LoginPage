<template>
<div>
  <el-button type="primary" @click="checkLoginState" v-if="!UserStore.isLogin">FB登入紐</el-button>
</div>
<!-- <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div> -->

</template>

<script  lang="ts" setup>
import { ref } from 'vue';
import { userStore } from '@/stores/userStore';

const UserStore = userStore();

// 登入拿fb token
function checkLoginState() {          // Called when a person is finished with the Login Button.当一个人完成登录按钮时调用。
  (window as any).fbAsyncInit();
  FB.login(function(response){
    // handle the response
    UserStore.fbLoginInfo = response;
    // See the onlogin handler// 查看 onlogin 处理程序
    UserStore.AllLoginStatus();
  },
  {
    scope : 'email,public_profile',
    return_scopes : true
  });
}

// function statusChangeCallback(response: fb.StatusResponse) {  // Called with the results from FB.getLoginStatus().// 使用 FB.getLoginStatus() 的结果调用。
//   console.log('statusChangeCallback');
//   console.log(response);                   // The current login status of the person.// 该人的当前登录状态。
//   if (response.status === 'connected') {   // Logged into your webpage and Facebook.// 登录到您的网页和 Facebook。
//     UserStore.isLogin = true;
//     testAPI();
//   } else {                                 // Not logged into your webpage or we are unable to tell.// 未登录您的网页或我们无法判断。
//     UserStore.isLogin = false;
//   }
// }

// function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.// 登录后测试 Graph API。 有关何时进行此调用，请参阅 statusChangeCallback()。
//   console.log('Welcome!  Fetching your information.... ');
//   // @ts-ignore
//   FB.api('/me',{fields: 'id,name,email'}, function(response: TResponse) {
//     // console.log(response);
//     fbresponse.value = response;
//     SystemStore.login_fromModal = false;
//   });
// }

// 把函式輸出到付組建可拿的地方
defineExpose({});
</script>
<style lang='scss' scope>
</style>