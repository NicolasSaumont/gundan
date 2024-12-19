<script setup lang="ts">
import PublicGameSectionEffectsGearFifth from '~/components/Public/GameSection/Effects/GearFifth.vue';
import PublicGameSectionEffectsRasengan from '~/components/Public/GameSection/Effects/Rasengan.vue';
import PublicGameSectionEffectsEnseiHeidan from '~/components/Public/GameSection/Effects/EnseiHeidan.vue';

defineProps<{
  card: IGameSectionCardDetails
}>()

const { t } = useI18n()

const cardsEffect = {
  gearFifth: PublicGameSectionEffectsGearFifth,
  rasengan: PublicGameSectionEffectsRasengan,
  enseiHeidan: PublicGameSectionEffectsEnseiHeidan
}
</script>

<template>
  <article class="flex flex-col gap-6 items-center bg-black w-full border-2 p-4 pb-8 border-secondary rounded-lg relative">
    <component 
      v-if="cardsEffect[card.effect]" 
      :is="cardsEffect[card.effect]" 
    />
    <img :src="`/_nuxt/assets/images/${card.sourceImage}`" :alt="t('Image de présentation du jeu')" class="h-48 -mt-16 z-10">
    <h2 class="font-caveat text-6xl">{{ card.title }}</h2>
    <p class="text-center">{{ card.content }}</p>
  </article>
</template>