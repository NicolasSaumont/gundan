<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="loader-container">
    <img
      class="goku"
      src="/_nuxt/assets/images/kamehameha-loader/goku.png"
    >
    <img
      class="vegeta"
      src="/_nuxt/assets/images/kamehameha-loader/vegeta.png"
    >
    <img
      class="ray shaking-animation"
      src="/_nuxt/assets/images/kamehameha-loader/ray.png"
    >
    <img
      class="collision"
      src="/_nuxt/assets/images/kamehameha-loader/collision.png"
    >
    <img
      class="goku-energy shaking-animation animation-delay-50"
      src="/_nuxt/assets/images/kamehameha-loader/goku-energy.png"
    >
    <img
      class="vegeta-energy shaking-animation animation-delay-80"
      src="/_nuxt/assets/images/kamehameha-loader/vegeta-energy.png"
    >
    <p>{{ t('Chargement...') }}</p>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}

.loader-container {
  width: 100%;
  height: 100vh;
  background-color: rgba(189, 0, 44, 0.9);
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
}

.loader-container p {
  color: white;
  text-transform: uppercase;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  position: absolute;
  top: 35%;
}

.goku, 
.goku-energy {
  position: absolute;
  top: calc(50% - (100px / 2));
  height: 100px;
}

.goku {
  left: 25%;
}

.goku-energy {
  left: calc(25% + 81.78px - 7px); /* largeur goku : 81.78 / offset energy : 7 */
}

.vegeta,
.vegeta-energy {
  position: absolute;
  top: calc(50% - (100px / 2));
  height: 100px;
}

.vegeta {
  right: 25%;
}

.vegeta-energy {
  right: calc(25% + 57.41px - 7px) /* largeur vegeta : 57.41 / offset energy : 7 */
}

.ray {
  position: absolute;
  top: calc(50% - (100px / 2));
  left: calc(25% + 81.78px + 74.69px - 10px ); /* largeur goku : 81.78 / largeur goku energy : 74.69 / offset : 10 */
  width: calc(50% - 81.78px - 74.69px - 57.41px - 74.69px + 20px);
  height: 100px;
}

.collision {
  position: absolute;
  top: calc(50% - (100px / 2));
  left: 50%;
  height: 100px;
  animation: collision-mouvement 4s linear infinite;
}

.shaking-animation {
  animation: shake 0.1s infinite;
}

.shaking-animation:hover {
  animation: none; /* Arrête l'animation sur hover */
}

.animation-delay-20 {
  animation-delay: 0.02s;
}

.animation-delay-50 {
  animation-delay: 0.05s;
}

.animation-delay-80 {
  animation-delay: 0.08s;
}

/* Animation pour les soubresauts rapides */
@keyframes shake {
  0% { transform: translate(0px, 0px); }
  25% { transform: translate(-1px, 1px); }
  50% { transform: translate(1px, -1px); }
  75% { transform: translate(-0.5px, -0.5px); }
  100% { transform: translate(0px, 0px); }
}

/* Animation pour le mouvement de la collision */
@keyframes collision-mouvement {
  0% { transform: translate(0%, 0%) scale(1); }
  25% { transform: translate(50%, 0%) scale(0.9); }
  50% { transform: translate(0%, 0%) scale(1.1); }
  75% { transform: translate(-50%, 0%) scale(0.9); }
  100% { transform: translate(0%, 0%) scale(1); }
}
</style>