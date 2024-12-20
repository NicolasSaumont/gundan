<script setup lang="ts">
const cloudTop = ref('-10%'); 
const cloudWidth = ref(`${INITIAL_CLOUD_WIDTH}px`); 
const cloudHeight = ref(`${INITIAL_CLOUD_HEIGHT}px`);

const titanIsVisible = ref(false);

onMounted(() => {
  // Change les propriétés du nuage à chaque boucle d'animation
  const updateCloudProperties = () => {
    // Change la position verticale entre -10% et 11%
    cloudTop.value = `${Math.random() * MAX_TOP_MIN_TOP_DIFFERENCE + MAX_TOP_POSITION}%`; // Math.random() donne une valeur entre 0 et 22, on soustrait 10 pour que ça soit entre -10% et 11%

    // Change la largeur entre 50px et 250px et calcule la hauteur correspondante
    const width = Math.random() * MAX_CLOUD_WIDTH_MIN_CLOUD_WIDTH_DIFFERENCE + MIN_CLOUD_WIDTH; // Largeur entre 50px et 250px
    const height = (width * INITIAL_CLOUD_HEIGHT) / INITIAL_CLOUD_WIDTH; // Calcule la hauteur en respectant le ratio 80:150
    cloudWidth.value = `${width}px`;
    cloudHeight.value = `${height}px`;
  };

  const cloudElement = document.querySelector('.cloud');
  if (cloudElement) {
    cloudElement.addEventListener('animationiteration', updateCloudProperties);
  }

  const displayTitan = () => {
    titanIsVisible.value = true;

    // Cache le Titan après la durée de l'animation
    setTimeout(() => {
      titanIsVisible.value = false;

      // Relance l'animation avec un délai aléatoire entre 2s et 5s
      const randomDelay = Math.random() * MAX_TITAN_ANIMATION_DEBOUNCE_MMIN_TITAN_ANIMATION_DEBOUNCE_DIFFERENCE + MIN_TITAN_ANIMATION_DEBOUNCE;
      setTimeout(displayTitan, randomDelay);
    }, TITAN_ANIMATION_DURATION);
  };

  displayTitan();
});
</script>

<template>
<div class="absolute -mt-4 w-[273px] h-[144px] overflow-hidden"> <!--144 = 192 (hauteur de l'image snk.png) - 64 (-mt-16) + 16 (-mt-4)-->
    <div 
      class="cloud absolute -left-[150px] opacity-20 bg-contain bg-no-repeat" 
      style="background-image: url('/_nuxt/assets/images/cloud.png');"
      :style="{ 
        top: cloudTop, 
        width: cloudWidth, 
        height: cloudHeight,
        animation: `moveCloud ${CLOUD_ANIMATION_DURATION}ms linear infinite`
      }" 
    />
    <div class="titan-container -mt-12 w-[273px] h-[192px] overflow-hidden">
      <img 
        v-show="titanIsVisible"
        src="/_nuxt/assets/images/colossalTitan.png" 
        class="absolute -left-[80px]"
        :style="{ animation: `displayTitan ${TITAN_ANIMATION_DURATION}ms linear` }"

      >
    </div>
  </div>
</template>

<style>
@keyframes moveCloud {
  0% {
    left: -150px;
  }
  100% {
    left: 100%;
  }
}

@keyframes displayTitan {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.05;
  }
  100% {
    opacity: 0;
  }
}
</style>
