<script setup lang='ts'>
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3>{{ t('Gestion des Senzu') }}</h3>
    <div>{{ t('Lors d’un combat, chaque joueur peut investir un certain nombre de Senzu pour augmenter temporairement l’efficacité de son attaque ou de sa défense.') }}</div>
    <div>{{ t('Chaque joueur dispose d’un certain nombre de Senzu en début de partie (12).') }}</div>
    <div>{{ t('Les Senzu sont une ressource limitée : une fois dépensés, ils ne peuvent être récupérés que via des capacités spéciales ou des évènements particuliers.') }}</div>
  </div>
</template>
