<template>
	<div class="h-[60px] bg-white opacity-95">
		<div class="BETWEEN items-center w-[80%] h-full mx-auto">
			<div class="font-bold FLEX_R_CENTER gap-2">
				<img class="w-10 h-10 cursor-pointer" :src="catLogo" alt="paw" @click="router.push({ name: 'home' })" />
				<h1>XXXXX</h1>
			</div>
			<div
				class="font-bold text-sm cursor-pointer border-b border-solid border-transparent hover:border-b hover:border-solid hover:border-black"
				@click="SystemStore.login_fromModal = true"
				v-if="!UserStore.isLogin"
			>
				LOGIN
			</div>
			<div v-else class="FLEX_R_CENTER gap-2">
				<div class="w-8 rounded-full overflow-hidden">
					<img class="w-full" :src="UserStore.navUser?.photo" />
				</div>
				<div class="text-sm">Hi, {{ UserStore.navUser?.name }}</div>
				<div class="text-xs cursor-pointer border-b border-solid border-transparent hover:border-b hover:border-solid hover:border-black" @click="UserStore.LogOut">
					<div class="CENTER_C">
						<el-icon :size="18"><SwitchButton /></el-icon>
					</div>
				</div>
			</div>
		</div>
	</div>
	<login_modal />
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue';
	import { SwitchButton } from '@element-plus/icons-vue';
	import login_modal from '@/components/Nav/login_modal.vue';
	import { systemStore } from '@/stores/systemStore';
	import { userStore } from '@/stores/userStore';
	import { useRouter } from 'vue-router';

	const SystemStore = systemStore();
	const UserStore = userStore();

	const router = useRouter();

	const catLogo = ref(`/sp-LoginPage/pawnobg.png`);

	onMounted(() => {
		// 回調狀態
		UserStore.AllLoginStatus();
	});
</script>
<style lang="scss" scope></style>
