<template>

<fblogin class="my-2"/>
<googlelogin />


</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue'
import fblogin from '@/views/fblogin.vue'
import googlelogin from '@/views/googlelogin.vue'
import Web3 from 'web3';
// import { BlockHeader, Block } from 'web3-eth' // ex. package types
// const web3 = new Web3('ws://localhost:8546');
// web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
// web3.eth.getAccounts().then(console.log);



</script>

<style lang='scss' scope>
</style>