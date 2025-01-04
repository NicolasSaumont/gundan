<script setup lang="ts">
const { t } = useI18n()

const currentImage = ref('')
const opacity = ref(0)

const handleHoverImage = (image: string) => {
  if (currentImage.value === image) return
  if (currentImage.value !== '') opacity.value = 0
  setTimeout(() => {
    currentImage.value = image
    setTimeout(() => {
      opacity.value = 1
    }, SHOW_DURATION) 
  }, HIDE_DURATION)
}
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="relative flex px-10 justify-between items-center w-1/2 h-1/2 bg-primary border-2 border-secondary rounded-xl">
      <!-- Image d'arrière-plan avec opacité -->
      <div 
        class="absolute inset-0 bg-menu bg-cover bg-no-repeat bg-center opacity-10" 
      />

      <!-- Contenu au-dessus de l'image -->
      <HomeMenu @hoverImage="handleHoverImage" />
      <div class="relative z-10">
        <img 
          v-show="currentImage" 
          :src="currentImage" 
          :alt="t('Image de présentation du lien')"
          :style="{ transition: 'opacity 0.2s ease-in-out', opacity: opacity }"
        >
        <img 
          v-show="!currentImage" 
          src="/_nuxt/assets/images/home-page-menu/luffy-naruto-fight.gif" 
          :alt="t('Luffy combattant Naruto')"
        >
      </div>
    </div>
  </div>
</template>
