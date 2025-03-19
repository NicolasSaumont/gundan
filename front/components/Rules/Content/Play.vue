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

    <h3>{{ t('Détail de la phase de combat') }}</h3>
    <div class="flex flex-col">
      <span>{{ t('Le joueur attaquant choisit un personnage pour attaquer.') }}</span>
      <span>{{ t('Le joueur peut alors investir entre 1 et le nombre de Senzu disponibles pour booster l’attaque :') }}</span>
    </div>
    <span class="text-secondary italic text-center">{{ t('Points d\'attaque = Puissance x ( Nombre de Senzu dépensés + 1 )') }}</span>
    <div class="flex flex-col">
      <span>{{ t('Le joueur défenseur choisit un personnage pour se défendre.') }}</span>
      <span>{{ t('Le joueur peut aussi investir entre 1 et le nombre de Senzu disponibles pour booster la défense :') }}</span>
    </div>
    <span class="text-secondary italic text-center">{{ t('Points de défense = Défense x ( Nombre de Senzu dépensés + 1 )') }}</span>
    <span>{{ t('Déclaration du vainqueur :') }}</span>
    <span class="text-secondary italic text-center">{{ t('Issue du combat = Points d\'attaque - Points de défense') }}</span>
    <span>{{ t('Si l\'issue du combat est positive, c\'est le joueur attaquant qui remporte le round.') }}</span>
    <div class="flex flex-col">
      <span>{{ t('Le personnage défenseur subit alors des dégâts égaux aux points de dégâts du personnage attaquant. Les dégâts ainsi calculés viennent se soustraire aux PV du personnage.') }}</span>
      <span>{{ t('Si ces PV deviennent inférieurs ou égaux à 0, le personnage défenseur est éliminé.') }}</span>
      <span>{{ t('La différence restante est infligée au joueur défenseur sous forme de dégâts directs à ses PV.') }}</span>
    </div>
    <span>{{ t('Si l\'issue du combat est négative, c\'est le joueur défenseur qui remporte le round.') }}</span>
    <div class="flex flex-col">
      <span>{{ t('Le personnage attaquant subit alors des dégâts égaux aux points de dégâts du personnage défenseur. Les dégâts ainsi calculés viennent se soustraire aux PV du personnage.') }}</span>
      <span>{{ t('Si ces PV deviennent inférieurs ou égaux à 0, le personnage attaquant est éliminé.') }}</span>
      <span>{{ t('La différence restante est infligée au joueur attaquant sous forme de dégâts directs à ses PV.') }}</span>
    </div>

    <h3>{{ t('Exemple') }}</h3>
    <ol>
      <li>{{ t('Puissance du personnage attaquant : 5 ATQ') }}</li>
      <li>{{ t('Dégâts du personnage attaquant : 3 DEG') }}</li>
      <li>{{ t('Défense du personnage défenseur : 4 DEF') }}</li>
      <li>{{ t('PV restant du personnage défenseur : 2 PV') }}</li>
      <li>{{ t('L\'attaquant utilise 3 Senzu (5 × ( 3 + 1 ) = 5 × 4 = 20 ATQ).') }}</li>
      <li>{{ t('Le défenseur utilise 0 Senzu (4 × 1 = 4 DEF)') }}</li>
      <li>{{ t('Issue du combat : 20 - 4 = 16') }}</li>
      <li>{{ t('Le défenseur subit 3 dégâts, qui viennent se soustraire aux 2 PV qu\'il lui reste : 2 - 3 = -1') }}</li>
      <li>{{ t('Le défenseur est éliminé, et le joueur adverse subit 1 point de dégâts.') }}</li>
    </ol>
  </div>
</template>
