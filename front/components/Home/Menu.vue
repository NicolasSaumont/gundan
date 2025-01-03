<script setup lang='ts'>
const emit = defineEmits(['hoverImage'])

const { t } = useI18n()

const homePageLinks = [
  {
    label: 'Combats',
    path: '/battle-modes',
    image: '/_nuxt/assets/images/home-page-menu/seiya.png'
  },
  {
    label: 'Collection',
    path: '/collection',
    image: '/_nuxt/assets/images/home-page-menu/lucy.png'
  },
  {
    label: 'Missions',
    path: '/missions',
    image: '/_nuxt/assets/images/home-page-menu/snk.png'
  },
  {
    label: 'Boutique',
    path: '/shop',
    image: '/_nuxt/assets/images/home-page-menu/nami.png'
  }
]
</script>

<template>
  <nav class="relative flex flex-col justify-center z-10 text-white font-bungee text-4xl">
    <template v-for="link in homePageLinks" :key="link.label">
      <span 
        class="link py-4" 
        @mouseover="emit('hoverImage', link.image)"
        @mouseleave="emit('hoverImage', '')"
      >
        {{ t(link.label) }}
      </span>
    </template>
  </nav>
</template>

<style scoped>
.link {
  @apply hover:cursor-pointer hover:text-secondary hover:translate-x-8 transition-all duration-300 ease-in-out;
}
</style>
