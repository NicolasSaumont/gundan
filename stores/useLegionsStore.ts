import { defineStore } from 'pinia';

// TODO: once API linked, initiate 'legions' at null
const legions = ref<ILegions>([
  {
    id: 1,
    name: 'One Piece',
    image: `${LOGO_FILE}/one-piece.png`,
    description: 'La légion One Piece rassemble les héros et pirates les plus célèbres de l’univers du célèbre manga. En combinant force, stratégie et camaraderie, cette légion excelle dans les attaques dévastatrices et les capacités spéciales. Les personnages emblématiques comme Luffy, Zoro et Nami apportent chacun des pouvoirs uniques, capables de retourner le cours d’un combat. Grâce à des synergies de légion puissantes, les pirates de One Piece peuvent se soutenir mutuellement pour infliger des dégâts massifs ou renforcer la défense de l’équipage. Utilisez leur esprit d’équipe et leur détermination pour dominer vos adversaires et atteindre votre objectif : le trésor ultime !',
    tagLine: 'Deviens le Roi des Cartes !'
  },
  {
    id: 2,
    name: 'Naruto',
    image: `${LOGO_FILE}/naruto.png`,
    description: 'La légion Naruto regroupe les ninjas les plus puissants de l’univers de Konoha et au-delà. Des héros comme Naruto, Sasuke et Sakura offrent une combinaison redoutable de techniques secrètes et de capacités stratégiques. Les personnages de cette légion maîtrisent des pouvoirs uniques, comme le chakra et les transformations, qui peuvent infliger des dégâts massifs ou renforcer la défense de votre équipe. Grâce à des bonus de légion activés par les synergies entre les personnages, la légion Naruto excelle dans l’adaptation et la résilience. Utilisez leurs compétences pour contourner les obstacles et dominer vos ennemis dans chaque combat !',
    tagLine: 'Trouve ton Nindo et dépasse tous les Shunins !'
  },
  {
    id: 3,
    name: 'Dragon Ball',
    image: `${LOGO_FILE}/dragon-ball.png`,
    description: 'La légion Dragon Ball réunit les guerriers les plus puissants de l’univers, des Saiyans comme Goku et Vegeta aux maîtres d\'arts martiaux comme Piccolo et Gohan. Avec leur force incroyable et leurs techniques légendaires comme le Kamehameha et le Final Flash, ces héros peuvent déclencher des attaques dévastatrices qui changent le cours de la bataille. Grâce aux synergies de légion, les personnages de Dragon Ball peuvent renforcer leurs attaques ou défendre avec une puissance inouïe. Exploitez leur potentiel infini, activez leurs capacités spéciales et faites face à tous vos adversaires avec la fureur des guerriers Saiyans !',
    tagLine: 'Repousse tes limites pour être le Guerrier Ultime !'
  }
])

export const useLegionsStore = defineStore('legions', () => {
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
    legions
  };
});
