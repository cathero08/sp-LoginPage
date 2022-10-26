<template>

<div>
  <el-button type="primary" @click="onSignIn">Google登入</el-button>
  <el-button @click="logout">Google登出</el-button>
  <div id="buttonDiv"></div> 
</div>

</template>

<script  lang="ts" setup>
import {onMounted} from 'vue';

const onSignIn = () => {
  
}

const logout = () =>{
  // @ts-ignore
  google.accounts.id.disableAutoSelect();
}

function handleCredentialResponse(response: any) {
  console.log("Encoded JWT ID token: " + response.credential);
}

onMounted(()=> {
  // @ts-ignore
  google.accounts.id.initialize({
    client_id: "736590708524-hoa5jlkd9ruess896ds1i6coiiavdrjg.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  // @ts-ignore
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  // @ts-ignore
  google.accounts.id.prompt(); // also display the One Tap dialog
})
</script>
<style lang='scss' scope>
</style>