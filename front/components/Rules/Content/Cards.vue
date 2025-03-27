<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBurst } from '@fortawesome/free-solid-svg-icons/faBurst'
import { faChessRook } from '@fortawesome/free-solid-svg-icons/faChessRook'
import { faSyringe } from '@fortawesome/free-solid-svg-icons/faSyringe'
import { faChessKing } from '@fortawesome/free-solid-svg-icons/faChessKing'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons/faFistRaised'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons/faShieldHalved'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons/faFireFlameCurved'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faHandsHoldingCircle } from '@fortawesome/free-solid-svg-icons/faHandsHoldingCircle'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3>{{ t('Cartes "Personnage"') }}</h3>
    <ul>
      <li>{{ t('Nom : Nom du personnage.') }}</li>
      <li>{{ t('Légion : Ex. One Piece, Naruto, Dragon Ball, etc.') }}</li>
      <li>
        <span>{{ t('Rareté : ') }}</span>
        <span class="text-green-700">{{ t(' Commune') }}</span>
        <span>{{ t(' / ') }}</span>
        <span class="text-blue-600">{{ t('Inhabituelle') }}</span>
        <span>{{ t(' / ') }}</span>
        <span class="text-red-600">{{ t('Rare') }}</span>
        <span>{{ t(' / ') }}</span>
        <span class="text-purple-700">{{ t('Légendaire') }}</span>
      </li>
      <li>{{ t('Niveau : Détermine la puissance de base du personnage.') }}</li>
      <li>
        <span>{{ t('Type : ') }}</span>
        <font-awesome-icon :icon="faBurst"/>
        <span>{{ t(' Attaquant / ') }}</span>
        <font-awesome-icon :icon="faChessRook"/>
        <span>{{ t(' Défenseur / ') }}</span>
        <font-awesome-icon :icon="faSyringe"/>
        <span>{{ t(' Soutien / ') }}</span>
        <font-awesome-icon :icon="faChessKing"/>
        <span>{{ t(' Stratège') }}</span>
      </li>
      <li><font-awesome-icon :icon="faFistRaised"/><span>{{ t(' Puissance : Attaque.') }}</span></li>
      <li><font-awesome-icon :icon="faShieldHalved"/><span>{{ t(' Défense : Défense.') }}</span></li>
      <li><font-awesome-icon :icon="faFireFlameCurved"/><span>{{ t(' Dégâts : Points de dégâts.') }}</span></li>
      <li><font-awesome-icon :icon="faHeart"/><span>{{ t(' Points de Vie (PV) : Le personnage est défaussé si les PV arrivent à 0.') }}</span></li>
      <li><font-awesome-icon :icon="faBolt"/><span>{{ t(' Capacité : Activée sous certaines conditions.') }}</span></li>
      <li><font-awesome-icon :icon="faHandsHoldingCircle"/><span>{{ t(' Bonus de légion : Activé sous certaines conditions.') }}</span></li>
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