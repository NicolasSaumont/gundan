<script setup lang="ts">
import { computed, ref } from 'vue';
import {MIN_LINE_SIZE_RATIO, MAX_LINE_SIZE_RATIO, LINE_COUNT, LINE_ANIMATION_SPEED_MULTIPLIER, LINE_BORDER_RATIO} from '~/utils/constants'

const rasengan = ref<HTMLDivElement | null>(null);

// Calcul des tailles des lignes
const lineSizeRange = computed(() => ({
  min: RASENGAN_SIDE * MIN_LINE_SIZE_RATIO,
  max: RASENGAN_SIDE * MAX_LINE_SIZE_RATIO  
}));

/**
 * Créé les lignes dynamiques du Rasengan
 * @param container - L'élément HTML dans lequel les lignes sont ajoutées
 * @param lineCount - Nombre total de lignes à créer
 */
const createLines = (container: HTMLDivElement, lineCount: number) => {
  for (let i = 1; i <= lineCount; i++) {

    const line = document.createElement('div');
    line.classList.add('line');

    // Calcul aléatoire de la taille de la ligne dans la plage spécifiée
    const size = Math.random() * (lineSizeRange.value.max - lineSizeRange.value.min) + lineSizeRange.value.min;

    line.style.top = `${size}px`;
    line.style.left = `${size}px`;
    line.style.bottom = `${size}px`;
    line.style.right = `${size}px`;

    // Définition d'une animation personnalisée pour chaque ligne
    line.style.animation = `rotating ${i * LINE_ANIMATION_SPEED_MULTIPLIER}s infinite linear`;

    container.appendChild(line);
  }
};

onMounted(() => {
  if (rasengan.value) {
    createLines(rasengan.value, LINE_COUNT);
  }
});
</script>


<template>
  <div
    ref="rasengan"
    class="rasengan"
    :style="{
      '--rasengan-size': `${RASENGAN_SIDE}px`,
      '--line-border': `${RASENGAN_SIDE * LINE_BORDER_RATIO}px` // Épaisseur de la bordure des lignes calculée dynamiquement
    }"
  />
</template>


<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #262626;
    background-repeat: repeat-y;
    background-position: center;
}

.rasengan {
  position: absolute;
  top: 11%;
  left: 37%;
  transform: translate(-50%, -50%);
  width: var(--rasengan-size);
  height: var(--rasengan-size);
  perspective: 1000px;
  background: radial-gradient(#fff 10%, #2994f2 40%);
  border-radius: 50%;
  animation: twinkling 1.5s infinite linear;
}

.rasengan .line {
  position: absolute;
  border: var(--line-border) solid rgba(255, 255, 255, 0.5); /* Échelle dynamique */
  border-radius: 50%;
  box-shadow: 0 0 1px #fff;
}

@keyframes rotating {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateZ(360deg) rotateX(360deg) rotateY(360deg);
  }
}

@keyframes twinkling {
  0%, 100% {
    box-shadow: 0 0 1px 0px #fff, 0 0 8px 3px #2994f2;
  }
  20% {
    box-shadow: 0 0 1px 0.5px #fff, 0 0 6px 2px #2994f2;
  }
  40% {
    box-shadow: 0 0 2px 0px #fff, 0 0 7px 3px #2994f2;
  }
  60% {
    box-shadow: 0 0 1px 0.5px #fff, 0 0 8px 3px #2994f2;
  }
  80% {
    box-shadow: 0 0 2px 0px #fff, 0 0 7px 2px #2994f2;
  }
}
</style>
