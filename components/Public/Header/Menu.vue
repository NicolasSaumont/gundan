<script setup lang="ts">
const { t } = useI18n()

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  // Ajustement de la position vers laquelle scroller pour prendre en compte le sticky header
  const targetPosition = element.offsetTop;

  const headerHeight = document.getElementById('header')?.offsetHeight || 0;

  const adjustedPosition = targetPosition - headerHeight - GAP_BETWEEN_SECTIONS;

  // Défilement vers la position ajustée
  window.scrollTo({
    top: adjustedPosition,
    behavior: 'smooth'
  });
};
</script>

<template>
  <div class="tracking-wider flex gap-6 text-white font-semibold">
    <p class="link p-2 rounded-lg" @click="scrollTo('top')">{{ t('Accueil') }}</p>
    <p class="link p-2 rounded-lg" @click="scrollTo('game')">{{ t('Jeu') }}</p>
    <p class="link p-2 rounded-lg" @click="scrollTo('legions')">{{ t('Légions') }}</p>
  </div>
</template>

<style>
.link {
  @apply hover:cursor-pointer hover:bg-white hover:tracking-widest hover:shadow-2xl hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary active:text-secondary transition-all duration-200 ease-in-out;
}
</style>