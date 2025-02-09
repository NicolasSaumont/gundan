import { defineStore } from 'pinia'

const activeLegionIndex = ref(1)
const isFlipping = ref(false)

// TODO: once API linked, initiate 'legions' at null
const legions = ref<ILegions>([
  {
    id: 1,
    name: 'One Piece',
    image: `${LOGO_FILE}/one-piece.png`,
    description: 'Rejoins les héros et pirates légendaires de One Piece ! Grâce à leurs attaques dévastatrices, leur puissante synergie et esprit d’équipe, Luffy et son équipage maîtrisent chaque bataille. En combinant force et stratégie, vise le trésor ultime et impose-toi comme le maître des océans !',
    tagLine: 'Deviens le Roi des Cartes !'
  },
  {
    id: 2,
    name: 'Naruto',
    image: `${LOGO_FILE}/naruto.png`,
    description: 'Incarne les ninjas iconiques de l’univers de Naruto ! Avec des techniques secrètes, des transformations uniques et des synergies stratégiques, dépasse tous les obstacles. Allie résilience et puissance grâce à Naruto, Sasuke et leurs alliés pour surclasser tes adversaires dans des combats intenses !',
    tagLine: 'Trouve ton Nindo et dépasse tous les Shunins !'
  },
  {
    id: 3,
    name: 'Dragon Ball',
    image: `${LOGO_FILE}/goku.png`,
    description: 'Affronte tes ennemis avec les guerriers légendaires de Dragon Ball ! Goku, Vegeta et leurs alliés repoussent leurs limites avec des attaques mythiques et des pouvoirs infinis. Exploite leur force incomparable et leurs synergies pour remporter la victoire !',
    tagLine: 'Repousse tes limites pour être le Guerrier Ultime !'
  }
])

export const useLegionStore = defineStore('legion', () => {
  const setLegions = async () => {
    // TODO: create loader
    console.log('loader active')
    try {
      // TODO: get call API
      console.log('API is called to get legions list')
      // await getLegions()
      // legions.value = data
    } catch (error) {
      // TODO: errors management
    } finally {
      console.log('loader inactive')
    }
  }

  return {
    setLegions,
    legions,
    activeLegionIndex,
    isFlipping
  }
})
