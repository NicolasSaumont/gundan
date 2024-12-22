<script setup lang='ts'>
const { setLegions, legions } = useLegionsStore()
const { t } = useI18n()

const sliderIndex = ref(1)

onMounted(async () => {
  await setLegions()
  // Initialise sliderIndex à une valeur aléatoire entre le premier et le dernier index des légions
  sliderIndex.value = Math.floor(Math.random() * legions.length) + 1;
})

const isFlipping = ref(false); // État pour gérer l'animation

// Fonction pour animer le retournement et changer de légion
const flipCard = (direction: "next" | "previous") => {
  if (isFlipping.value) return; // Empêche une double animation
  isFlipping.value = true;

  // Attendre que la carte soit "retournée" pour changer l'index
  setTimeout(() => {
    if (direction === "next") {
      sliderIndex.value = sliderIndex.value !== legions.length ? sliderIndex.value + 1 : 1;
    } else {
      sliderIndex.value = sliderIndex.value !== 1 ? sliderIndex.value - 1 : legions.length;
    }
  }, 300); // Correspond à mi-parcours de l'animation

  // Terminer l'animation après la rotation complète
  setTimeout(() => {
    isFlipping.value = false;
  }, 600); // Durée totale de l'animation
};
</script>

<template>
  <section id="legions" class="h-[650px] bg-primary -mx-5">
    <div class="main-container slider flex flex-col items-center gap-2 px-10 py-10 h-full">
      <div class="main-container slider flex gap-4 px-10 py-10 h-full">
        <div class="w-1/3 p-4 flex flex-col justify-around">
          <h2 class="font-caveat text-4xl text-secondary">{{ t('Créez la plus puissante des alliances') }}</h2>
          <p>{{ t('Dans GUNDAN, combinez des légions issues des mangas cultes pour créer des stratégies uniques. Chaque légion offre des héros aux pouvoirs et synergies spéciales. Activez des bonus puissants, exploitez leurs forces et menez vos héros à la victoire dans ce jeu de cartes où stratégie et alliances font la différence !') }}</p>
        </div>
        <div
          class="card-container"
          :class="{ flipping: isFlipping }"
        >
          <template v-for="legion in legions" :key="legion.id">
            <PublicLegionsSectionLegion v-show="sliderIndex === legion.id" :legion="legion" />
          </template>
        </div>
      </div>
      <PublicLegionsSectionNavigation @slider-index-next="() => flipCard('next')" @slider-index-previous="() => flipCard('previous')" />
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

.card-container {
  perspective: 1000px;
}

.card-container.flipping {
  animation: flip 0.6s ease-in-out;
}

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
