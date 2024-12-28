<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const { scrollTo } = useMenu()
const { t } = useI18n()

const { handlePlayButtonClick } = useGame()
</script>

<template>
  <nav class="flex gap-6 font-bungee text-lg text-white h-12">
    <span class="link" @click="scrollTo('top')">
      {{ t('Accueil') }}
    </span>
    <span class="link" @click="scrollTo('game')">
      {{ t('Jeu') }}
    </span>
    <span class="link" @click="scrollTo('legions')">
      {{ t('Légions') }}
    </span>
    <button
      class="flex gap-2 bg-white text-secondary border-2 rounded-lg px-3 py-2 shadow-xl hover:cursor-pointer hover:bg-primary hover:text-xl hover:text-white transition-all duration-300 ease-in-out"
      @click="handlePlayButtonClick">
      <p>{{ t('Jouer') }}</p>
      <font-awesome-icon :icon="faGamepad" size="xl" />
    </button>
  </nav>
</template>

<style scoped>
.link {
  @apply tracking-widest px-3 py-2 hover:cursor-pointer hover:text-2xl hover:rotate-[-6deg] transition-all duration-300 ease-in-out;
}
</style>
