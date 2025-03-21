<script setup lang='ts'>
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3>{{ t('Mode combat rapide') }}</h3>
    <div>{{ t('Plutôt que le mode de combat classique, il est possible pour les joueurs de choisir le mode de combat rapide. Ce mode se différencie du mode de combat classique par :') }}</div>
    <ul>
      <li>{{ t('- Deck de 8 cartes minimum') }}</li>
      <li>{{ t('- Uniquement des cartes personnages') }}</li>
      <li>{{ t('- La somme totale des niveaux de personnage ne doit pas dépasser 28') }}</li>
      <li>{{ t('- Les joueurs ont 12 PV') }}</li>
      <li>{{ t('- 4 cartes sont tirées aléatoirement du deck et placées pour le combat') }}</li>
      <li>{{ t('- A chaque round, les cartes jouées sont défaussées') }}</li>
      <li>{{ t('- Le perdant est celui dont les PV atteignent 0 ou qui a le moins de PV à la fin des 4 rounds') }}</li>
    </ul>
  </div>
</template>
