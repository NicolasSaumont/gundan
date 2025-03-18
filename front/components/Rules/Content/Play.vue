<script setup lang='ts'>
const { setSelectedRulesSection } = useRulesStore()

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3>{{ t('Mise en place') }}</h3>
    <span>{{ t('Chaque joueur construit un deck de 40 cartes (personnages, objets, événements).') }}</span>
    <span>{{ t('Chaque joueur commence avec 20 points de vie et tire 5 cartes.') }}</span>

    <h3>{{ t('Phases de jeu') }}</h3>
    <span>{{ t('Une partie se déroule en plusieurs phases :') }}</span>
    <ol>
      <li>{{ t('1. Phase de Pioche : Chaque joueur pioche une carte à chaque tour.') }}</li>
      <li>{{ t('2. Phase de Placement : Place un personnage ou un objet en jeu (limite de 5 personnages sur le terrain).') }}</li>
      <li>{{ t('3. Phase d’Attaque : Choisir un personnage pour attaquer.') }}</li>
      <li>{{ t('4. Phase de Défense : L’adversaire peut défendre avec un de ses personnages.') }}</li>
      <li>{{ t('5. Phase de Pouvoirs : Si les conditions d’un pouvoir spécial sont remplies, il s’active automatiquement.') }}</li>
      <li>{{ t('6. Fin de Tour : Vérification des conditions de victoire ou fin de tour.') }}</li>
    </ol>
    <div>
      <span>{{ t('Lors d’un combat, chaque joueur peut investir un certain nombre de ') }}</span>
      <span class="text-primary underline cursor-pointer" @click="setSelectedRulesSection(RULES_SECTIONS.SENZU)">{{ t('Senzu') }}</span>
      <span>{{ t(' pour augmenter temporairement l’efficacité de son attaque ou de sa défense.') }}</span>
    </div>
  </div>
</template>
