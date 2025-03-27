<script setup lang='ts'>
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3>{{ t('Gestion des Senzu') }}</h3>
    <div>{{ t('Lors d’un combat, chaque joueur peut investir un certain nombre de Senzu pour augmenter temporairement l’efficacité de son attaque ou de sa défense.') }}</div>
    <div>{{ t('Chaque joueur dispose d’un certain nombre de Senzu en début de partie (12).') }}</div>
    <div>{{ t('Les Senzu sont une ressource limitée : une fois dépensés, ils ne peuvent être récupérés que via des capacités spéciales ou des évènements particuliers.') }}</div>
    
    <h3>{{ t('Mode Super Saiyan') }}</h3>
    <div>{{ t('Lors de la phase de combat, le joueur peut choisir d\'activer le mode "Super Saiyan" pour un de ses personnages en consommant 3 Senzu. Ce mode confère un puissant boost aux statistiques du personnage :') }}</div>
    <ul>
      <li>{{ t('+2 Puissance') }}</li>
      <li>{{ t('+2 Défense') }}</li>
      <li>{{ t('+2 Dégâts') }}</li>
    </ul>
    <div>{{ t('Le mode Fury dure jusqu\'à la fin du tour et permet au personnage de devenir beaucoup plus résistant et puissant. Cependant, il ne peut être utilisé que si le joueur a suffisamment de Senzu en réserve.') }}</div>
  </div>
</template>
