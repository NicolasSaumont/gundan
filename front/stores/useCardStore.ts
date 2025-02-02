import { defineStore } from 'pinia'

// TODO: once API linked, initiate 'cards' at null
const cards = ref<ICards>([
  {
    id: 1,
    name: 'Monkey D. Luffy',
    description: 'Capitaine des Mugiwara, Luffy rêve de devenir le Roi des Pirates. Son fruit du démon Gomu Gomu no Mi lui confère une grande élasticité, qu’il utilise avec créativité au combat.',
    type: 'Attaquant',
    rarity: 'Inhabituelle',
    experience: 850,
    maxLevel: 5,
    evolution: {
      level: 5,
      experienceNeeded: 850,
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
        name: 'Volonté du D.',
        code: 'Puissance et défense +1',
        description: 'Les personnages de cette légion gagnent +1 en puissance et +1 en défense'
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
    experience: 500,
    maxLevel: 3,
    evolution: {
      level: 2,
      experienceNeeded: 100,
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
        name: 'Volonté du D.',
        code: 'Puissance et défense +1',
        description: 'Les personnages de cette légion gagnent +1 en puissance et +1 en défense'
      },
      capacity: {
        quickMode: {
          name: 'Piège de couteaux éclatés',
          code: 'Défaite : -2 vie Adv',
          description: 'En cas de défaite, l\'adversaire perd 2 points de vie'
        },
        classicalMode: {
          name: 'Piège de couteaux éclatés',
          code: 'Sniper',
          description: 'Baggy inflige des dégâts à l’adversaire de son choix'
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
