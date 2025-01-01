<script setup lang='ts'>
const { setLegions, legions } = useLegionsStore()
const { activeLegionIndex, isFlipping } = storeToRefs(useLegionsStore())


const { t } = useI18n()

const legionsRef = ref<HTMLElement | null>(null);

const { scrollProgress } = useScroll(legionsRef)

onMounted(async () => {
  await setLegions()
  // Initialise sliderIndex à une valeur aléatoire entre le premier et le dernier index des légions
  activeLegionIndex.value = Math.floor(Math.random() * legions.length) + 1;
})
</script>

<template>
  <section id="legions" ref="legionsRef" class="bg-primary -mx-5">
    <div class="main-container flex flex-col items-center gap-10 px-10 py-10">
      <div class="flex gap-4">
        <div class="section-left w-1/3 p-4 flex flex-col justify-around" :style="{ transform: `translateX(${-30 + scrollProgress * 30}%)` }">
          <h2 class="font-caveat text-4xl">{{ t('Créez la plus puissante des alliances') }}</h2>
          <p>{{ t('Dans GUNDAN, combinez des légions issues des mangas cultes pour créer des stratégies uniques. Chaque légion offre des héros aux pouvoirs et synergies spéciales. Activez des bonus puissants, exploitez leurs forces et menez vos héros à la victoire dans ce jeu de cartes où stratégie et alliances font la différence !') }}</p>
        </div>
        <div
          class="section-right card-container w-2/3 h-[400px]" 
          :class="{ flipping: isFlipping }"
          :style="{ transform: `translateX(${30 - scrollProgress * 30}%)` }"
        >
          <template v-for="legion in legions" :key="legion.id">
            <PublicLegionsSectionLegion v-show="activeLegionIndex === legion.id" :legion="legion" />
          </template>
        </div>
      </div>
      <PublicLegionsSectionNavigation />
    </div>
  </section>
</template>

<style scoped>
.section-left,
.section-right {
  transition: transform 0.1s linear;
}

.card-container {
  perspective: 1000px;
}

.card-container.flipping {
  animation: flip 0.6s ease-in-out;
}

/* Animation pour le retournement des cartes */
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>
