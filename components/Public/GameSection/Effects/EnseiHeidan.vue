<script setup lang="ts">
const cloudTop = ref('-10%'); // Valeur initiale de top

onMounted(() => {
  setInterval(() => {
    // Changer la position verticale entre -10% et 12% toutes les 800ms
    cloudTop.value = `${Math.random() * 22 - 10}%`; // Math.random() donne une valeur entre 0 et 22, on soustrait 10 pour que ça soit entre -10% et 12%
  }, 800); // Intervalle de 800ms
});
</script>

<template>
  <div class="clouds-container -mt-4">
    <div class="cloud" :style="{ top: cloudTop }" />
  </div>
</template>

<style>
.clouds-container {
  position: absolute;
  width: 100%;
  height: 100%; 
  overflow: hidden; 
}

.cloud {
  position: absolute;
  left: -150px; 
  width: 150px; 
  height: 80px; 
  background-image: url('@/assets/images/cloud.png');
  background-size: contain; 
  background-repeat: no-repeat; 
  animation: moveCloud 800ms linear infinite;
}

@keyframes moveCloud {
  0% {
    left: -150px; /* Débute hors écran à gauche */
  }
  100% {
    left: 100%; /* Fin de l'animation à droite */
  }
}
</style>
