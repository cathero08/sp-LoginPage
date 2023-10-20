<template>
	<div class="w-full max-w-[1200px] mx-auto pt-10">
		<div class="BETWEEN mb-10" v-for="(item, index) in demoList" :key="index">
			<div class="w-[58%] p-2">
				<div class="shadow-lg rounded-lg overflow-hidden">
					<img class="" :src="item.image" alt="cas" />
				</div>
			</div>
			<div class="w-[40%] FLEX_C justify-around">
				<div class="FLEX_C card-text">
					<h1>{{ item.title }}</h1>
					<div v-html="item.content"></div>
				</div>
				<div>
					<a :href="item.link" target="_blank" class="text-[20px] text-[#BCBCBC] inline-block underline underline-offset-4 cursor-pointer hover:translate-x-1 transition-all">
						Demo <el-icon :size="20"><Link /></el-icon
					></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue';
	import { Link } from '@element-plus/icons-vue';

	const catImg = ref(`/sp-LoginPage/assets/img/Snipaste_2023-03-28_04-38-39.jpg`);
	const wedding = ref(`/sp-LoginPage/assets/img/Snipaste_2023-03-29_01-13-43.jpg`);
	const splogin = ref(`/sp-LoginPage/assets/img/sp-login.jpg`);
	const twitterImg = ref(`/sp-LoginPage/assets/img/Snipaste_2023-10-21_01-41-12.jpg`);

	const spLoginList = computed(() => {
		return `
			<ol style="list-style:auto; padding-left:20px">
				<li>實現 Google oauth2 、FB登入串接</li>
				<li>使用 Git action 來實現自動部署</li>
				<li>練習自訂專案eslint、prettier</li>
			</ol>
		`;
	});
	const twitterList = computed(() => {
		return `
			<ol style="list-style:auto; padding-left:20px">
				<li>使用工具有 Nuxt3, Mongodb, Prisma, Cloudinary, Tailwindcss 部署使用Vercel</li>
				<li>登入使用 JWT 機制,密碼有做 bcrypt 加密</li>
				<li>主要是試做 Nuxt3 的框架練習</li>
			</ol>
		`;
	});

	const demoList = [
		{
			title: `Clone-twitter`,
			content: `<p>RWD設計參考Twitter, 有搜尋,發文,回文,個人頁還有夜晚模式功能<br /><br />${twitterList.value}`,
			image: twitterImg.value,
			link: `https://test-twitter-orcin.vercel.app/`,
		},
		{
			title: `個人作品集`,
			content: `<p>統整一些之前做過的作品和實驗新的串接、套件、動畫<br /><br />${spLoginList.value}`,
			image: splogin.value,
			link: `https://cathero08.github.io/sp-LoginPage/`,
		},
		{
			title: `個人專題 貓咪咖啡館`,
			content: `<p>初學寫的網頁 <br /><br />練習七頁切版來熟悉CSS語法，包括一些動畫小互動， 裡面主要有使用HTML CSS javascript和一些ui套件如swiper、Aos、WOW</p>`,
			image: catImg.value,
			link: `https://cathero08.github.io/tfd104_-sever/Nako-ffee_html/index.html`,
		},
		{
			title: `團體專案 婚禮網站`,
			content: `<p>多人協作的專案,可製作婚禮卡片邀請函,統計來客<br /><br />用php寫api串接前後端 負責卡片的客製化方法 裡面使用 Vue2、jQuery、php、mysql、git、gulp</p>`,
			image: wedding.value,
			link: `https://tibamef2e.com/tfd104/g5/Cupid_project/dist/`,
		},
	];
</script>
<style lang="scss" scope>
	.card-text {
		// text-align: center;
		h1 {
			font-weight: 500;
			font-size: 25px;
			line-height: 50px;
			color: #216278;
		}
		p {
			font-weight: 400;
			font-size: 18px;
			line-height: 35px;
		}
	}
</style>
