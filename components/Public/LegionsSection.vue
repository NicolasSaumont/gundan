<script setup lang='ts'>
const { setLegions, legions } = useLegionsStore()
const { t } = useI18n()

const sliderIndex = ref(1)

const handlePreviousLegionClick = () => {
  if (sliderIndex.value !== 1) {
    sliderIndex.value -= 1
  } else {
    sliderIndex.value = legions.length
  }
} 

const handleNextLegionClick = () => {
  if (sliderIndex.value !== legions.length) {
    sliderIndex.value += 1
  } else {
    sliderIndex.value = 1
  }
} 

onMounted(async () => {
  await setLegions()
})
</script>

<template>
  <section id="legions" class="h-[650px] bg-primary -mx-5">
    <div class="main-container slider flex flex-col items-center gap-2 px-10 py-10 h-full">
      <div class="main-container slider flex gap-4 px-10 py-10 h-full">
        <div class="w-1/3 p-4 flex flex-col justify-around">
          <h2 class="font-caveat text-4xl text-secondary">{{ t('Créez la plus puissante des alliances') }}</h2>
          <p>{{ t('Dans GUNDAN, combinez des légions issues des mangas cultes pour créer des stratégies uniques. Chaque légion offre des héros aux pouvoirs et synergies spéciales. Activez des bonus puissants, exploitez leurs forces et menez vos héros à la victoire dans ce jeu de cartes où stratégie et alliances font la différence !') }}</p>
        </div>
        <template v-for="legion in legions" :key="legion.id">
          <PublicLegionsSectionLegion v-show="sliderIndex === legion.id" :legion="legion" />
        </template>
      </div>
      <nav class="flex gap-24">
        <img src="@/assets/images/arrowLeft.png" 
          :alt="t('Flèche de sélection de la légion précédente')" 
          :title="t('Légion précédente')"
          class="cursor-pointer shaking-animation"
          @click="handlePreviousLegionClick"
        >
        <img 
          src="@/assets/images/arrowRight.png" 
          :alt="t('Flèche de sélection de la légion suivante')" 
          :title="t('Légion suivante')"
          class="cursor-pointer shaking-animation animation-delay-50"
          @click="handleNextLegionClick"
        >
      </nav>
    </div>
  </section>
</template>

<style>
.shaking-animation {
  animation: shake 0.1s infinite;
}

.shaking-animation:hover {
  animation: none; /* Arrête l'animation sur hover */
}

.animation-delay-50 {
  animation-delay: 0.05s;
}

/* Animation pour les soubresauts rapides */
@keyframes shake {
  0% { transform: translate(0px, 0px); }
  25% { transform: translate(-1px, 1px); }
  50% { transform: translate(1px, -1px); }
  75% { transform: translate(-0.5px, -0.5px); }
  100% { transform: translate(0px, 0px); }
}
</style>
