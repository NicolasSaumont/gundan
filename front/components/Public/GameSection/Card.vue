<script setup lang="ts">
import PublicGameSectionEffectsGearFifth from '~/components/Public/GameSection/Effects/GearFifth.vue'
import PublicGameSectionEffectsRasengan from '~/components/Public/GameSection/Effects/Rasengan.vue'
import PublicGameSectionEffectsEnseiHeidan from '~/components/Public/GameSection/Effects/EnseiHeidan.vue'

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
  <article 
    class="flex flex-col gap-6 items-center bg-black w-full border-2 p-4 pb-8 border-secondary rounded-lg relative bg-no-repeat"
    :style="{ 
      backgroundImage: `url(/_nuxt/assets/images/public-home-page/game-section/${card.background}-lines.png)`,
      backgroundPosition: `center calc(100% + 50px)`
    }"
  >
    <component 
      v-if="cardsEffect[card.effect] && cardsEffect[card.effect] !== cardsEffect.rasengan" 
      :is="cardsEffect[card.effect]" 
    />
    <div class="relative">
      <component 
        v-if="cardsEffect[card.effect] && cardsEffect[card.effect] === cardsEffect.rasengan" 
        :is="cardsEffect[card.effect]" 
      />
      <img :src="`/_nuxt/assets/images/public-home-page/game-section/${card.sourceImage}`" :alt="t('Image de présentation du jeu')" class="-mt-16 z-10">
    </div>
    <h2 class="font-caveat text-6xl">{{ card.title }}</h2>
    <p class="text-center">{{ card.content }}</p>
  </article>
</template>

<style scoped>
article::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(17, 11, 13, 0.95);
  border-radius: 0.5rem;
  z-index: -1; 
}
</style>