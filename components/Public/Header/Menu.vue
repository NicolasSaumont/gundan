<script setup lang="ts">
const { scrollTo } = useMenu()
</script>

<template>
  <div class="flex gap-6 font-bungee text-lg">
    <SharedButton :text-content="'Accueil'" @click="scrollTo('top')" />
    <SharedButton :text-content="'Jeu'" @click="scrollTo('game')" />
    <SharedButton :text-content="'Légions'" @click="scrollTo('legions')" />
  </div>
</template>
