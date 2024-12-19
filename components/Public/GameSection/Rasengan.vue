<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
  width: { type: Number, default: 25 },
  height: { type: Number, default: 25 }
});

const rasengan = ref<HTMLDivElement | null>(null);

// Calculer des variables dynamiques en fonction de la taille
const lineSizeRange = computed(() => ({
  min: props.width * 0.02, // Exemple : 2% de la largeur
  max: props.width * 0.2  // Exemple : 20% de la largeur
}));

const createLines = (container: HTMLDivElement, lineCount: number) => {
  for (let i = 1; i <= lineCount; i++) {
    const line = document.createElement('div');
    line.classList.add('line');

    // Calcul dynamique de la taille
    const size = Math.random() * (lineSizeRange.value.max - lineSizeRange.value.min) + lineSizeRange.value.min;

    line.style.top = `${size}px`;
    line.style.left = `${size}px`;
    line.style.bottom = `${size}px`;
    line.style.right = `${size}px`;
    line.style.animation = `rotating ${i * 0.03}s infinite linear`;

    container.appendChild(line);
  }
};

onMounted(() => {
  if (rasengan.value) {
    createLines(rasengan.value, 25); // 100 lignes par défaut
  }
});
</script>


<template>
  <div
    ref="rasengan"
    class="rasengan"
    :style="{
      '--rasengan-size': `${width}px`,
      '--line-border': `${width * 0.002}px` // Dynamique pour les lignes
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
