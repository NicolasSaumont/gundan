<script setup lang='ts'>
const { t } = useI18n()

const sliderIndex = ref(2)

const legions: ILegions = [
  {
    id: 1,
    name: 'One Piece',
    image: `${LOGO_FILE}/one-piece.png`,
    description: t('La légion One Piece rassemble les héros et pirates les plus célèbres de l’univers du célèbre manga. En combinant force, stratégie et camaraderie, cette légion excelle dans les attaques dévastatrices et les capacités spéciales. Les personnages emblématiques comme Luffy, Zoro et Nami apportent chacun des pouvoirs uniques, capables de retourner le cours d’un combat. Grâce à des synergies de légion puissantes, les pirates de One Piece peuvent se soutenir mutuellement pour infliger des dégâts massifs ou renforcer la défense de l’équipage. Utilisez leur esprit d’équipe et leur détermination pour dominer vos adversaires et atteindre votre objectif : le trésor ultime !'),
  },
  {
    id: 2,
    name: 'Naruto',
    image: `${LOGO_FILE}/naruto.png`,
    description: t('La légion Naruto regroupe les ninjas les plus puissants de l’univers de Konoha et au-delà. Des héros comme Naruto, Sasuke et Sakura offrent une combinaison redoutable de techniques secrètes et de capacités stratégiques. Les personnages de cette légion maîtrisent des pouvoirs uniques, comme le chakra et les transformations, qui peuvent infliger des dégâts massifs ou renforcer la défense de votre équipe. Grâce à des bonus de légion activés par les synergies entre les personnages, la légion Naruto excelle dans l’adaptation et la résilience. Utilisez leurs compétences pour contourner les obstacles et dominer vos ennemis dans chaque combat !'),
  },
  {
    id: 3,
    name: 'Dragon Ball',
    image: `${LOGO_FILE}/dragon-ball.png`,
    description: t('La légion Dragon Ball réunit les guerriers les plus puissants de l’univers, des Saiyans comme Goku et Vegeta aux maîtres d\'arts martiaux comme Piccolo et Gohan. Avec leur force incroyable et leurs techniques légendaires comme le Kamehameha et le Final Flash, ces héros peuvent déclencher des attaques dévastatrices qui changent le cours de la bataille. Grâce aux synergies de légion, les personnages de Dragon Ball peuvent renforcer leurs attaques ou défendre avec une puissance inouïe. Exploitez leur potentiel infini, activez leurs capacités spéciales et faites face à tous vos adversaires avec la fureur des guerriers Saiyans !'),
  }
]
</script>

<template>
  <section id="legions" class="h-[500px] bg-primary -mx-5">
    <div class="main-container slider flex gap-4 px-10 py-4 h-full">
      <div class="w-1/2 p-4 flex flex-col justify-around">
        <h2 class="font-caveat text-4xl">{{ t('Créez la plus puissante des alliances') }}</h2>
        <p>{{ t('Dans GUNDAN, les joueurs peuvent combiner plusieurs légions issues des mangas les plus cultes. Chaque légion apporte ses héros uniques, avec des pouvoirs et des synergies spéciales, permettant de créer une stratégie sur-mesure. Les bonus de légion activent des effets puissants selon les personnages choisis, et leur interaction crée des dynamiques de jeu inédites. Choisissez judicieusement vos légions, exploitez leurs forces et menez vos héros à la victoire dans ce jeu de cartes où stratégie et alliances sont la clé du succès !') }}</p>
      </div>
      <template v-for="legion in legions" :key="legion.id">
        <PublicLegionsSectionLegion v-show="sliderIndex === legion.id" :legion="legion" />
      </template>
    </div>
  </section>
</template>
