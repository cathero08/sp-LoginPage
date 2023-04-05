<template>
	<div class="w-full min-h-screen" :style="'background-image: url(/sp-LoginPage/assets/img/pokebg.jpeg);'">
		<div class="max-w-[1920px] w-full mx-auto">
			<div class="fixed top-0 w-full z-50 shadow-md">
				<Nav />
			</div>
			<mvArea />
			<aboutArea />
			<!-- <caseSwiper /> -->

			<div class="aaa">123</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue';
	import { Search } from '@element-plus/icons-vue';
	import Nav from './nav.vue';
	import mvArea from '@/components/index/mvArea.vue';
	import aboutArea from '@/components/index/aboutArea.vue';
	import caseSwiper from '@/components/index/caseSwiper.vue';
	import { systemStore } from '@/stores/systemStore';
	// import Web3 from 'web3';
	// import { BlockHeader, Block } from 'web3-eth' // ex. package types
	// const web3 = new Web3('ws://localhost:8546');
	// web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
	// web3.eth.getAccounts().then(console.log);

	const SystemStore = systemStore();

	const pokeBg = ref('/sp-LoginPage/assets/img/pokebg.jpeg');

	onMounted(() => {
		SystemStore.getDevice();
	});
</script>

<style lang="scss" scope>
	.aaa {
		height: 200vh;
	}
</style>
