<template>
	<div class="relative">
		<section class="container">
			<div v-for="item in All_col">
				<div v-for="item in 2" class="row" :class="{ 'row-moved': item === 2 }">
					<div v-for="item in All_row" class="hexagon"></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue';

	const All_col = ref(6);
	const All_row = ref(20);

	let hexagoni = document.getElementsByClassName('hexagon');

	const light_controler = () => {
		for (let i = 0; i < hexagoni.length; i++) {
			hexagoni[i].addEventListener('mouseenter', () => {
				hexagoni[i].classList.add('light');
				setTimeout(function () {
					hexagoni[i].classList.remove('light');
				}, 800);
			});
		}
	};

	onMounted(() => {
		light_controler();
	});
</script>
<style lang="scss" scope>
	.container {
		top: 42px;
		// left: -50px;
		position: absolute;
		// transform: translateY(-50%);
	}

	.row {
		display: block;
		width: 100vw;
		height: 121px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		margin-top: -42px;
		// flex-wrap: wrap;
		// filter: drop-shadow(0px 0px 1px rgba(7, 181, 59, 0.1));

		.hexagon {
			position: relative;
			width: 100px;
			min-width: 100px;
			height: 100px;
			background-color: rgba(255, 255, 255, 0.1);
			clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
			margin: 0px 2px;
			transition: all 0.2s linear;
		}

		&.row-moved {
			padding-left: 103px;
		}
	}

	.light {
		background: rgb(7, 181, 59, 0.2) !important;
		animation: colorgen 1s infinite;
	}

	@keyframes colorgen {
		0% {
			filter: hue-rotate(-45deg);
		}
		100% {
			filter: hue-rotate(90deg);
		}
	}
</style>
