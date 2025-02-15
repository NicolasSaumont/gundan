import { ref, computed, onMounted, onUnmounted } from 'vue';
import { defineStore } from 'pinia';

// Fonction pour obtenir l'orientation brute
const getRawOrientation = (event?: DeviceOrientationEvent) => ({
  alpha: event?.alpha || 0,
  beta: event?.beta || 0,
  gamma: event?.gamma || 0
});

export const useOrientationStore = defineStore('orientation', () => {
  // Références réactives
  const baseOrientation = ref(getRawOrientation());
  const absolute = ref(getRawOrientation());
  const firstReading = ref(true);

  // Calcul de l'orientation relative
  const relative = computed(() => ({
    alpha: absolute.value.alpha - baseOrientation.value.alpha,
    beta: absolute.value.beta - baseOrientation.value.beta,
    gamma: absolute.value.gamma - baseOrientation.value.gamma
  }));

  // Réinitialisation de l'orientation de base
  const resetBaseOrientation = () => {
    firstReading.value = true;
    baseOrientation.value = getRawOrientation();
  };

  // Gestion de l'événement deviceorientation
  const handleOrientation = (event: DeviceOrientationEvent) => {
    if (firstReading.value) {
      firstReading.value = false;
      baseOrientation.value = getRawOrientation(event);
    }
    absolute.value = getRawOrientation(event);
  };

  // Ajout et suppression des écouteurs d'événements
  onMounted(() => {
    window.addEventListener('deviceorientation', handleOrientation, true);
  });

  onUnmounted(() => {
    window.removeEventListener('deviceorientation', handleOrientation, true);
  });

  return { absolute, relative, resetBaseOrientation };
});