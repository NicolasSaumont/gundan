
<script setup lang='ts'>
const {
  toggleForm
} = useLoginStore()

const {
  loginForm
} = storeToRefs(useLoginStore())
</script>

<template>
  <div 
    class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-28 h-28 bg-white rounded-full overflow-hidden cursor-pointer z-10 transition-all duration-500 ease-in-out"
    :class="loginForm ? 'left-[66.66%]' : 'left-[33.33%]'"
    @click="toggleForm"
  >
    <div 
      class="flex items-center -translate-y-[5%] transition-all duration-500 ease-in-out"
      :class="loginForm ? '-translate-x-[350%]' : 'translate-x-[15%]'"
    >
      <img
        class="w-[70%]"
        src="/_nuxt/assets/images/kamehameha-loader/goku.png"
      >
      <img
        class="w-[45%] -translate-x-[10%]"
        src="/_nuxt/assets/images/kamehameha-loader/goku-energy.png"
      >
      <img
        class="-translate-x-[10%]"
        src="/_nuxt/assets/images/kamehameha-loader/ray.png"
      >
      <img
        class="-translate-x-[50%] translate-y-[4%] z-50"
        src="/_nuxt/assets/images/kamehameha-loader/collision.png"
      >
      <img
        class="-translate-x-[70%]"
        src="/_nuxt/assets/images/kamehameha-loader/ray.png"
      >
      <img
        class="w-[45%] -translate-x-[160%]"
        src="/_nuxt/assets/images/kamehameha-loader/vegeta-energy.png"
      >
      <img
        class="w-[50%] -translate-x-[160%]"
        src="/_nuxt/assets/images/kamehameha-loader/vegeta.png"
      >
    </div>
  </div>
</template>
