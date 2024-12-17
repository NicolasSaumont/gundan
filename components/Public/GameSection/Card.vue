<script setup lang="ts">
defineProps<{
  sourceImage: string
  title: string
  content: string
}>()

const { t } = useI18n()
</script>

<template>
  <article class="flex flex-col gap-4 items-center bg-black w-full border-2 p-2 border-secondary rounded-lg">
    <img :src="`~/assets/images/${sourceImage}.jpg`" :alt="t('Image de présentation du jeu')">
    <h2 class="font-caveat text-6xl">{{ title }}</h2>
    <p>{{ content }}</p>
  </article>
</template>