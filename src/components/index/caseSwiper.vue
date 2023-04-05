<template>
	<div class="w-full max-w-[1200px] mx-auto">
		<swiper
			class="h-[500px]"
			:slides-per-view="1"
			:space-between="50"
			navigation
			:pagination="{ clickable: true }"
		>
			<swiper-slide
			class="bg-gray-100 h-full"
			>
				Slide 1
			</swiper-slide>
			<swiper-slide
			class="bg-gray-100 h-full"
			>
				Slide 1
			</swiper-slide>
			<swiper-slide
			class="bg-gray-100 h-full"
			>
				Slide 1
			</swiper-slide>
		</swiper>
	</div>
</template>

<script lang='ts' setup>
	import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';

	SwiperCore.use([Autoplay, Pagination, Navigation]);

</script>
<style lang='scss' scope>
</style>