<template>
  <el-dialog v-model="SystemStore.login_fromModal" class="dialog_login" :show-close="false">
    我是彈窗
    <fblogin />
    <googlelogin />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import fblogin from "@/components/Nav/fblogin.vue";
import googlelogin from "@/components/Nav/googlelogin.vue";
import { systemStore } from "@/stores/systemStore";

const SystemStore = systemStore();

</script>
<style lang="scss" scope></style>
