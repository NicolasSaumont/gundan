<script setup lang="ts">
const { t } = useI18n()

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const targetPosition = element.offsetTop;

  const headerHeight = document.getElementById('header')?.offsetHeight || 0;

  const adjustedPosition = targetPosition - headerHeight - GAP_BETWEEN_SECTIONS;

  // Défilement vers la position ajustée
  window.scrollTo({
    top: adjustedPosition,
    behavior: 'smooth', // Ou 'auto' pour sans animation
  });
};
</script>

<template>
  <div class="flex gap-2">
    <p class="link" @click="scrollTo('top')">{{ t('Accueil') }}</p>
    <p class="link" @click="scrollTo('game')">{{ t('Jeu') }}</p>
    <p class="link" @click="scrollTo('legions')">{{ t('Légions') }}</p>
  </div>
</template>

<style>
.link {
  @apply hover:cursor-pointer
}
</style>