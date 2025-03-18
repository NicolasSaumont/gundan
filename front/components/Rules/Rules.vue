<script setup lang='ts'></script>

<template>
  <div>
      Déroulement d’une partie

      Mise en place

      Chaque joueur construit un deck de 40 cartes (personnages, objets, événements).
      Chaque joueur commence avec 20 points de vie et tire 5 cartes au début.

      Phases de jeu

      Une partie se déroule en plusieurs phases :
      1. Phase de Pioche : Chaque joueur pioche une carte à chaque tour.
      2. Phase de Placement : Place un personnage ou un objet en jeu (limite de 5 personnages sur le terrain).
      3. Phase d’Attaque : Choisir un personnage pour attaquer.
      4. Phase de Défense : L’adversaire peut défendre avec un de ses personnages.
      5. Phase de Pouvoirs : Si les conditions d’un pouvoir spécial sont remplies, il s’active automatiquement.
      6. Fin de Tour : Vérification des conditions de victoire ou fin de tour.

      Lors d’un combat, chaque joueur peut investir un certain nombre de Senzu pour augmenter temporairement l’efficacité de son attaque ou de sa défense.

      Détail de la phase de combat

      Le joueur attaquant choisit un personnage pour attaquer.
      Le joueur peut alors investir entre 1 et le nombre de Senzu disponibles pour booster l’attaque :
      Points d'attaque = Puissance x Nombre de Senzu dépensés

      Le joueur défenseur choisit un personnage pour se défendre.
      Le joueur peut aussi investir entre 1 et le nombre de Senzu disponibles pour booster la défense :
      Points de défense = Défense x Nombre de Senzu dépensés

      Déclaration du vainqueur :
      Issue du combat = Points d'attaque - Points de défense

      Si l'issue du combat est positive, c'est le joueur attaquant qui remporte le round.

      Le personnage défenseur subit alors des dégâts égaux aux points de dégâts du personnage attaquant. Les dégâts ainsi calculés viennent se soustraire aux PV du personnage.
      Si ces PV deviennent inférieurs ou égaux à 0 :
      Le personnage défenseur est éliminé.
      La différence restante est infligée au joueur défenseur sous forme de dégâts directs à ses PV

      Si l'issue du combat est négative, c'est le joueur défenseur qui remporte le round.

      Le personnage attaquant subit alors des dégâts égaux aux points de dégâts du personnage défenseur. Les dégâts ainsi calculés viennent se soustraire aux PV du personnage.
      Si ces PV deviennent inférieurs ou égaux à 0 :
      Le personnage attaquant est éliminé.
      La différence restante est infligée au joueur attaquant sous forme de dégâts directs à ses PV

      Exemple :

      Puissance du personnage attaquant : 5 ATQ
      Dégâts du personnage attaquant : 3 DEG
      Défense du personnage défenseur : 4 DEF
      PV restant du personnage défenseur : 2 PV
      L'attaquant utilise 3 Senzu (5 × 3 = 15 ATQ).
      Le défenseur utilise 1 Senzu (4 × 1 = 4 DEF)
      Issue du combat : 15 - 4 = 11
      Le défenseur subit 4 dégâts : 2 - 4 = -2
      Le défenseur est éliminé, et le joueur adverse subit 2 points de dégâts.

      Gestion des Senzu

      Chaque joueur dispose d’un certain nombre de Senzu en début de partie (12).
      Les Senzu sont une ressource limitée : une fois dépensés, ils ne peuvent être récupérés que via des capacités spéciales ou des évènements particuliers.

      Mode Fury (Activation Spéciale)

      Lors de la phase de combat, le joueur peut choisir d'activer le mode Fury pour un de ses personnages en consommant 3 Senzu. Ce mode confère un puissant boost aux statistiques du personnage :

      +2 Puissance
      +2 Défense
      +2 Dégâts

      Le mode Fury dure jusqu'à la fin du tour et permet au personnage de devenir beaucoup plus résistant et puissant. Cependant, il ne peut être utilisé que si le joueur a suffisamment de Senzu en réserve.

      Mode combat rapide

      Plutôt que le mode de combat classique, il est possible pour les joueurs de choisir le mode de combat rapide.
      Ce mode se différencie du mode de combat classique par :
      Deck de 8 cartes minimum
      Uniquement des cartes personnages
      La somme totale des niveaux de personnage ne doit pas dépasser 28
      Les joueurs ont 12 PV
      4 cartes sont tirées aléatoirement du deck et placées pour le combat
      A chaque round, les cartes jouées sont défaussées
      Le perdant est celui dont les PV atteignent 0 ou qui a le moins de PV à la fin des 4 rounds

    </div>
</template>
