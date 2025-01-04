<script setup lang='ts'>
const emit = defineEmits(['hoverImage'])

const { t } = useI18n()
</script>

<template>
  <nav class="relative flex flex-col justify-center z-10 text-white font-bungee text-4xl">
    <template v-for="link in NAVIGATION_LINKS" :key="link.label">
      <NuxtLink :to="link.path" 
        class="link py-4" 
        @mouseover="emit('hoverImage', link.image)"
        @mouseleave="emit('hoverImage', '')"
      >
        {{ t(link.label) }}
      </NuxtLink>
    </template>
  </nav>
</template>

<style scoped>
.link {
  @apply hover:cursor-pointer hover:text-secondary hover:translate-x-8 transition-all duration-300 ease-in-out;
}
</style>
