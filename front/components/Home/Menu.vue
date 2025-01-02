<script setup lang='ts'>
const { t } = useI18n()

const homePageLinks = [
  {
    label: 'Combats',
    path: '/battle-modes'
  },
  {
    label: 'Collection',
    path: '/collection'
  },
  {
    label: 'Missions',
    path: '/missions'
  },
  {
    label: 'Boutique',
    path: '/shop'
  }
]
</script>

<template>
  <nav class="relative flex flex-col gap-8 justify-center z-10 text-white font-bungee text-4xl">
    <template v-for="link in homePageLinks" :key="link.label">
      <span class="link">{{ t(link.label) }}</span>
    </template>
  </nav>
</template>

<style scoped>
.link {
  @apply hover:cursor-pointer hover:text-secondary hover:translate-x-8 transition-all duration-300 ease-in-out;
}
</style>
