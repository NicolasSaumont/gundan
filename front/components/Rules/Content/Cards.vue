<script setup lang='ts'>
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3>{{ t('Cartes "Personnage"') }}</h3>
    <ul>
      <li>{{ t('Nom : Nom du personnage.') }}</li>
      <li>{{ t('Légion : Ex. One Piece, Naruto, Dragon Ball, etc.') }}</li>
      <li>{{ t('Niveau : Détermine la puissance de base du personnage.') }}</li>
      <li>{{ t('Puissance : Attaque.') }}</li>
      <li>{{ t('Défense : Défense.') }}</li>
      <li>{{ t('Dégâts : Points de dégâts.') }}</li>
      <li>{{ t('Points de Vie (PV) : Le personnage est défaussé si les PV arriventà 0.') }}</li>
      <li>{{ t('Capacité : Activée sous certaines conditions.') }}</li>
      <li>{{ t('Bonus de légion : Activé sous certaines conditions.') }}</li>
      <li>{{ t('Type : Attaquant / Défenseur / Support / Stratège') }}</li>
      <li>{{ t('Rareté : Commune / Inhabituelle / Rare / Légendaire') }}</li>
    </ul>
    <h3>{{ t('Cartes "Objet"') }}</h3>
    <ul>
      <li>{{ t('Nom : Armes, artefacts, objets emblématiques des mangas.') }}</li>
      <li>{{ t('Effet : Bonus temporaire ou permanent (ex : +2 Attaque, +3 Défense).') }}</li>
    </ul>
    <h3>{{ t('Cartes "Événement"') }}</h3>
    <ul>
      <li>{{ t('Nom : Un événement majeur d’un manga.') }}</li>
      <li>{{ t('Effet : Modifie le déroulement de la partie (ex : bouleversement de règles, changement de conditions de victoire).') }}</li>
    </ul>
  </div>
</template>