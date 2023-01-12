<template>
    <div class="kv">
      <div class="kv-item" :class='{scroll:kvScroll, animate: active == (item - 1) || preactive == (item - 1) }' v-for="item in total" :style="img(item)">
      </div>
      <div class="">
        <div  class="transition-all duration-300 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" :style="{opacity: !kvScroll ? '1' : '0'}">
          <h1 class="font-bold text-[50px] md:text-[100px] text-white">Live a life you will remember</h1>
        </div>
        <div  class="transition-all duration-300 absolute bottom-[10%] left-1/2  -translate-x-1/2 text-center" :style="{opacity: !kvScroll ? '1' : '0'}">
          <h1 class="font-extrabold text-[12px] text-white whitespace-nowrap scroll-after">Scroll</h1>
        </div>
        <div class="transition-all duration-300 absolute bottom-[16%] md:bottom-[10%] left-1/2  -translate-x-1/2 text-center" :style="{opacity: kvScroll ? '1' : '0'}">
          <h1 class="font-extrabold text-[30px] md:text-[80px] text-black whitespace-nowrap">Love Your Life</h1>
        </div>
        <div  class="transition-all duration-300 absolute bottom-[8%] md:bottom-[4%] left-1/2  -translate-x-1/2 text-center" :style="{opacity: kvScroll ? '1' : '0'}">
          <h1 class="font-bold text-[20px] md:text-[36px] text-[#07b53b] whitespace-nowrap">越過舒適圈去探索你的極限。</h1>
        </div>
      </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from "vue";


const kvScroll = ref(false);
window.addEventListener('scroll', () => {
  kvScroll.value = window.scrollY > 0;
})

const total = ref(4);
const animationDuration = 10;
const active = ref(0);
const preactive = ref(1);
const img = (n:number) => {
  return {
    backgroundImage: `url(/sp-LoginPage/assets/img/photo${n}.jpeg)`,
    animationDuration: `${animationDuration}s`,
  }
}

setInterval(()=> {
  active.value = preactive.value;
  preactive.value = (preactive.value + 1 + total.value) % total.value;
}, animationDuration / 2 * 1000)

</script>
<style lang='scss' scope>
.kv {
  position: relative;
  width: 100%;
  height: 100vh;

  .kv-item {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 0.2s ease-in-out;
    object-fit: cover;
    background-position: top;
    background-repeat: no-repeat;

    @media (max-width:1200px) {

    }
  }
  .kv-item.animate {
    animation-name: kvanimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @media (max-width:1200px) {
      // width: 100%;
      animation-name: kvanimation2;
    }
  }
  .kv-item.scroll {
    width: 1200px;
    height: 40vh;
    background-position: center;
    @media (max-width:1200px) {
      width: 100%;
      animation-name: kvanimation;
    }
  }
}

.scroll-after {
  animation: scrollMove2 3s ease-in-out infinite;
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 1px;
    height: 80px;
    background-color: #fff;
    left: 14px;
    bottom: 0px;
    animation: scrollMove .9s ease-in-out infinite;
  }
}

@keyframes scrollMove {
  0%{
    transform: translateY(20%);
    height: 0px;
    bottom: 0px;
  }
  50% {
    height: 80px;
    bottom: -80px;
  }
  100%{
    transform: translateY(20%);
    height: 0px;
    bottom: -80px;
  }
}
@keyframes scrollMove2 {
  0%{
    transform: translateY(0%);
  }
  50% {
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0%);
  }
}

@keyframes kvanimation {
  0%{
    opacity: 0;
    background-size: 160% auto;
  }
  25%{
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  75%{
    opacity: 0;
  }
  100%{
    opacity: 0;
    background-size: 120% auto;
  }
}
@keyframes kvanimation2 {
  0%{
    opacity: 0;
    background-size: auto 140% ;
  }
  25%{
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  75%{
    opacity: 0;
  }
  100%{
    opacity: 0;
    background-size: auto 120% ;
  }
}
</style>