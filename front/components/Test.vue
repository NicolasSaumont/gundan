<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue';
import { useMotion } from "@vueuse/motion";
// import { useCardStore } from '@/stores/cardStore';
import { useOrientationStore } from '@/stores/useOrientationStore';

// Props du composant
defineProps({
  id: String,
  name: String,
  number: String,
  set: String,
  types: [String, Array],
  subtypes: { type: String, default: "basic" },
  supertype: { type: String, default: "pokémon" },
  rarity: { type: String, default: "common" },
  img: String,
  back: { type: String, default: "https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg" },
  foil: String,
  mask: String,
  showcase: Boolean
});

const { selectedCard } = useCardStore();
const { resetBaseOrientation } = useOrientationStore();

const thisCard = ref(null);
const isVisible = ref(document.visibilityState === "visible");
const interacting = ref(false);
const firstPop = ref(true);
const showcaseRunning = ref(false);

const motion = useMotion(thisCard, {
  initial: { scale: 1, rotateX: 0, rotateY: 0 },
  variants: {
    hover: { rotateX: -10, rotateY: 10, scale: 1.05 },
    pressed: { scale: 0.95 },
    popover: { scale: 1.5, transition: { type: "spring", stiffness: 200 } },
  }
});

// Gestion de l'interaction
const interact = (e) => {
  if (!isVisible.value || (selectedCard.value && selectedCard.value !== thisCard.value)) return;
  interacting.value = true;

  if (e.type === "touchmove") {
    e.clientX = e.touches[0].clientX;
    e.clientY = e.touches[0].clientY;
  }

  const rect = thisCard.value.getBoundingClientRect();
  const percent = {
    x: (100 / rect.width) * (e.clientX - rect.left),
    y: (100 / rect.height) * (e.clientY - rect.top)
  };

  const center = {
    x: percent.x - 50,
    y: percent.y - 50
  };

  motion.apply({ rotateX: -center.y / 5, rotateY: center.x / 5 }, "hover");

};

const interactEnd = () => {
  interacting.value = false;
  motion.apply("initial");
};

const activate = () => {
  if (selectedCard.value === thisCard.value) {
    selectedCard.value = null;
    motion.apply("initial");
  } else {
    selectedCard.value = thisCard.value;
    resetBaseOrientation();
    motion.apply("popover");
  }
};

const retreat = () => {
  motion.apply("initial");
};

watchEffect(() => {
  if (selectedCard.value === thisCard.value) {
    motion.apply("popover");
  } else {
    retreat();
  }
});

onMounted(() => {
  document.addEventListener('mousemove', interact);
  document.addEventListener('mouseleave', interactEnd);
  document.addEventListener('visibilitychange', () => {
    isVisible.value = document.visibilityState === "visible";
  });
});

onUnmounted(() => {
  document.removeEventListener('mousemove', interact);
  document.removeEventListener('mouseleave', interactEnd);
});
</script>

<template>
  <div ref="thisCard" class="pokemon-card" @click="activate">
    <img src="https://images.pokemontcg.io/swsh12pt5/160_hires.png" alt="Pokemon Card" class="card-image" />
  </div>
</template>

<style scoped>

:root {
    --pointer-x: 50%;
    --pointer-y: 50%;
    --card-scale: 1;
    --card-opacity: 0;
    --translate-x: 0px;
    --translate-y: 0px;
    --rotate-x: 0deg;
    --rotate-y: 0deg;
    --background-x: var(--pointer-x);
    --background-y: var(--pointer-y);
    --pointer-from-center: 0;    
    --pointer-from-top: var(--pointer-from-center);
    --pointer-from-left: var(--pointer-from-center);
  }
  
.pokemon-card {
  position: relative;
  width: 200px;
  height: 280px;
  transition: transform 0.3s ease-out;
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>