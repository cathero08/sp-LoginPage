<template>
  <!-- <fblogin/>
    <googlelogin /> -->
  <div class="h-[60px]">
    <div class="BETWEEN items-center w-[80%] h-full mx-auto">
      <div>XX I'M BLUE</div>
      <div
        class="text-sm cursor-pointer border-b border-solid border-transparent hover:border-b hover:border-solid hover:border-black"
        @click="SystemStore.login_fromModal = true"
        v-if="!UserStore.isLogin"
      >
        LOGIN
      </div>
      <div v-else class="flex">
        <div>
          <img :src="UserStore.navUser?.photo" />
        </div>
        <div>{{ UserStore.navUser?.name }}</div>
        <div @click="UserStore.LogOut">登出</div>
      </div>
    </div>
  </div>
  <login_modal />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import login_modal from "@/components/Nav/login_modal.vue";
import { systemStore } from "@/stores/systemStore";
import { userStore } from "@/stores/userStore";

const SystemStore = systemStore();
const UserStore = userStore();

onMounted(() => {
  // 回調狀態
  UserStore.AllLoginStatus();
});
</script>
<style lang="scss" scope></style>
