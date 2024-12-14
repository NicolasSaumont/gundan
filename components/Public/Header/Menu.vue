<script setup lang="ts">
const { scrollTo } = useMenu()
const { t } = useI18n()
</script>

<template>
  <div class="flex gap-10 text-lg h-8">
    <p class="link" @click="scrollTo('top')">
      {{ t('Accueil') }}
    </p>
    <p class="link" @click="scrollTo('game')">
      {{ t('Jeu') }}
    </p>
    <p class="link" @click="scrollTo('legions')">
      {{ t('Légions') }}
    </p>
  </div>
</template>

<style scoped>
.link {
  @apply tracking-widest text-white font-semibold hover:cursor-pointer hover:text-2xl hover:rotate-[-6deg] transition-all duration-300 ease-in-out;
}
</style>
