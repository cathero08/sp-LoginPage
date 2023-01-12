<template>
  <el-dialog v-model="SystemStore.login_fromModal" class="dialog_login" :show-close="false">
    <div class="CENTER text-xs didive-line">
      使用快速登入
    </div>
    <fblogin class="my-2"/>
    <googlelogin class="my-2"/>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import fblogin from "@/components/Nav/fblogin.vue";
import googlelogin from "@/components/Nav/googlelogin.vue";
import { systemStore } from "@/stores/systemStore";

const SystemStore = systemStore();

</script>
<style lang="scss" scope>
.didive-line {
  &::before {
    content: '';
    border-bottom: 1px solid #eee;
    flex: 1;
    margin-right: 0.6rem;
  }
  &::after {
    content: '';
    border-bottom: 1px solid #eee;
    flex: 1;
    margin-left: 0.6rem;
  }
}
</style>
