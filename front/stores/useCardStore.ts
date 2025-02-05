import { defineStore } from 'pinia'

// TODO: once API linked, initiate 'cards' at null
const cards = ref<ICards>([
  {
    id: 1,
    name: 'Monkey D. Luffy',
    description: 'Capitaine des Mugiwara, Luffy rêve de devenir le Roi des Pirates. Son fruit du démon Gomu Gomu no Mi lui confère une grande élasticité, qu’il utilise avec créativité au combat.',
    type: 'Attaquant',
    rarity: 'Inhabituelle',
    experience: null,
    maxLevel: 5,
    evolution: {
      level: 5,
      experienceNeeded: null,
      stats: {
        power: 8,
        defense: 7,
        damage: 6,
        health: 18,
      },
      image: 'luffy5'
    },
    legion: {
      name: 'One Piece'
    },
    skills: {
      bonus: {
        quickMode: {
          name: 'Volonté du D.',
          code: 'Puissance et défense +1',
          description: 'Le personnage gagne +1 en puissance et +1 en défense'
        },
        classicalMode: {
          name: 'Volonté du D.',
          code: 'Volonté du D.',
          description: 'Le personnage gagne +1 en puissance et +1 en défense'
        }
      },
      capacity: {
        quickMode: {
          name: 'Gear Second',
          code: 'Puissance +2',
          description: 'Luffy gagne +2 en puissance'
        },
        classicalMode: {
          name: 'Gear Second',
          code: 'Puissance +2 & Rebond',
          description: 'Luffy gagne +2 en puissance et il peut attaquer une seconde fois s’il élimine un adversaire'
        }
      }
    }
  },
  {
    id: 2,
    name: 'Baggy le Clown',
    description: 'Un pirate excentrique et rival de Luffy, Baggy possède les pouvoirs du Bara Bara no Mi, lui permettant de séparer son corps en morceaux.',
    type: 'Stratège',
    rarity: 'Commune',
    experience: 650,
    maxLevel: 3,
    evolution: {
      level: 2,
      experienceNeeded: 1000,
      stats: {
        power: 4,
        defense: 4,
        damage: 3,
        health: 14,
      },
      image: 'baggy2'
    },
    legion: {
      name: 'One Piece'
    },
    skills: {
      bonus: {
        quickMode: {
          name: 'Volonté du D.',
          code: 'Puissance et défense +1',
          description: 'Le personnage gagne +1 en puissance et +1 en défense'
        },
        classicalMode: {
          name: 'Volonté du D.',
          code: 'Volonté du D.',
          description: 'Le personnage gagne +1 en puissance et +1 en défense'
        }
      },
      capacity: {
        quickMode: {
          name: 'Piège de couteaux éclatés',
          code: 'Défaite : -2 vie Adv',
          description: 'En cas de défaite, l\'adversaire perd 2 points de vie'
        },
        classicalMode: {
          name: 'Piège de couteaux éclatés',
          code: 'Fragmentation',
          description: 'Baggy inflige des dégâts à l’adversaire de son choix'
        }
      }
    }
  },
  {
    id: 3,
    name: 'Son Goku',
    description: 'Guerrier Saiyan épris de combat, Goku rêve de devenir toujours plus fort. Son immense pouvoir, amplifié par ses transformations, fait de lui un défenseur inébranlable de la Terre.',
    type: 'Attaquant',
    rarity: 'Commune',
    experience: 0,
    maxLevel: 5,
    evolution: {
      level: 1,
      experienceNeeded: 500,
      stats: {
        power: 4,
        defense: 2,
        damage: 4,
        health: 8,
      },
      image: 'goku1'
    },
    legion: {
      name: 'Dragon Ball'
    },
    skills: {
      bonus: {
        quickMode: {
          name: 'Ascension Saiyan',
          code: 'Riposte: Puissance +3',
          description: 'En cas de défaite du compagnon précédent, le personnage gagne +3 en puissance'
        },
        classicalMode: {
          name: 'Ascension Saiyan',
          code: 'Ascension Saiyan',
          description: 'Le personnage évolue en une forme supérieure (+3 Puissance, +2 Défense) après avoir survécu à 3 attaques'
        }
      },
      capacity: {
        quickMode: {
          name: 'Capacité non disponible',
          code: 'Capacité non disponible',
          description: 'Le personnage doit atteindre le niveau 3 pour activer sa capacité'
        },
        classicalMode: {
          name: 'Capacité non disponible',
          code: 'Capacité non disponible',
          description: 'Le personnage doit atteindre le niveau 3 pour activer sa capacité'
        }
      }
    }
  }
])

export const useCardStore = defineStore('card', () => {
  const setCards = async () => {
    // TODO: create loader
    console.log('loader active')
    try {
      // TODO: get call API
      console.log('API is called to get cards list')
      // await getCards()
      // cards.value = data
    } catch (error) {
      // TODO: errors management
    } finally {
      console.log('loader inactive')
    }
  }

  return {
    setCards,
    cards
  }
})
