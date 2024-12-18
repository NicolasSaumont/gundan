<script setup lang="ts">
defineProps<{
  card: IGameSectionCardDetails
}>()

const { t } = useI18n()
</script>

<template>
  <article class="flex flex-col gap-6 items-center bg-black w-full border-2 p-4 pb-8 border-secondary rounded-lg relative">
    <LazyPublicGameSectionRasengan v-if="card.effect === 'rasengan'"/>
    <img :src="`/_nuxt/assets/images/${card.sourceImage}`" :alt="t('Image de présentation du jeu')" class="h-48 -mt-16">
    <h2 class="font-caveat text-6xl">{{ card.title }}</h2>
    <p class="text-center">{{ card.content }}</p>
  </article>
</template>