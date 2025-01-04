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
  <nav class="flex gap-6 font-bungee text-lg text-white h-12">
    <template v-for="link in homePageLinks" :key="link.label">
      <NuxtLink :to="link.path" 
        class="link" 
      >
        {{ t(link.label) }}
      </NuxtLink>
    </template>
  </nav>
</template>

<style scoped>
.link {
  @apply tracking-widest px-3 py-2 hover:cursor-pointer hover:text-2xl hover:rotate-[-6deg] transition-all duration-300 ease-in-out;
}
</style>
