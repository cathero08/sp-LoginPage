<template>

<el-button type="primary" class="p-5 bg-green">我是Views Index</el-button>
<el-button :icon="Search" circle />
<!-- <button scope="public_profile,email" autologoutlink="true" @click="checkLoginState">FB登入紐</button> -->
<div>目前狀態：</div> 
<!-- <div id="status">{{fbstatus}}</div> -->

</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue'
import Web3 from 'web3';
// import { BlockHeader, Block } from 'web3-eth' // ex. package types
// const web3 = new Web3('ws://localhost:8546');
// web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
// web3.eth.getAccounts().then(console.log);

const fbstatus = ref('');

// // @ts-ignore
// FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.// JS SDK 初始化后调用。
//   statusChangeCallback(response);        // Returns the login status.// 返回登录状态。
// });

// function statusChangeCallback(response: any) {  // Called with the results from FB.getLoginStatus().// 使用 FB.getLoginStatus() 的结果调用。
//   console.log('statusChangeCallback');
//   console.log(response);                   // The current login status of the person.// 该人的当前登录状态。
//   if (response.status === 'connected') {   // Logged into your webpage and Facebook.// 登录到您的网页和 Facebook。
//     testAPI();
//   } else {                                 // Not logged into your webpage or we are unable to tell.// 未登录您的网页或我们无法判断。
//     fbstatus.value = 'Please log ' +
//       'into this webpage.';
//   }
// }

// function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.// 登录后测试 Graph API。 有关何时进行此调用，请参阅 statusChangeCallback()。
//   console.log('Welcome!  Fetching your information.... ');
//   // @ts-ignore
//   FB.api('/me', function(response) {
//     console.log('Successful login for: ' + response.name);
//     fbstatus.value =
//       'Thanks for logging in, ' + response.name + '!';
//   });
// }

// function checkLoginState() {               // Called when a person is finished with the Login Button.当一个人完成登录按钮时调用。
//   // @ts-ignore
//   FB.getLoginStatus(function(response) {   // See the onlogin handler// 查看 onlogin 处理程序
//     statusChangeCallback(response);
//   });
// }
</script>

<style lang='scss' scope>
</style>