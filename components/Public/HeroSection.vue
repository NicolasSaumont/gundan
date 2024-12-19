<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const { t } = useI18n()
const { handlePlayButtonClick } = useGame()
const { headerHeight } = useMenu()

const heroHeight = ref(0)

onMounted(() => {
  if (!window) return
  heroHeight.value = window.innerHeight - headerHeight.value - HERO_OFFSET;
})
</script>

<template>
  <section id="hero" class="flex w-full mx-auto" :style="{ height: `${heroHeight}px` }">
    <div class="w-[45%] flex flex-col gap-10 justify-center items-center">
      <div class="flex flex-col items-center gap-4">
        <img src="@/assets/images/logo.jpg" width="250px" class="rounded-xl shadow shadow-white">
        <h1 class="font-bungee text-6xl">Gundan</h1>
      </div>
      <button
        class="h-24 inline-flex  items-center gap-2 bg-primary text-4xl text-white border-2 rounded-full px-3 py-2 shadow-xl hover:cursor-pointer hover:bg-black hover:text-secondary hover:text-6xl hover:border-secondary transition-all duration-300 ease-in-out"
        :title="t('Jouer')"
        @click="handlePlayButtonClick">
        <font-awesome-icon :icon="faGamepad" size="xl" />
      </button>
    </div>
    <div class="w-[55%] flex justify-center items-center">
      <iframe 
        class="w-full aspect-video	"
        src="https://www.youtube.com/embed/1CV5vYtD6mA?si=Aq8ELZG3zponIruC"
        title="YouTube video player" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen 
      />
    </div>
  </section>
</template>