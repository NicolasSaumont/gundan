<script setup lang="ts">
const gameRef = ref<HTMLElement | null>(null)

const { scrollProgress } = useScroll(gameRef)

const gameSectionCards: IGameSectionCards = [
  {
    id: 1,
    sourceImage: 'luffy.png',
    title: 'Collectionnez',
    content: 'Plongez dans un univers manga riche et captivant où chaque carte est unique. Découvrez des personnages puissants, des objets mystiques et des capacités spéciales. Explorez, collectionnez et complétez votre deck en trouvant les cartes rares et légendaires qui feront la différence dans vos duels.',
    effect: 'gearFifth',
    background: 'luffy'
  },
  {
    id: 2,
    sourceImage: 'naruto.png',
    title: 'Maîtrisez',
    content: 'Devenez un stratège en maîtrisant l\'art de la gestion des cartes. Optimisez vos combinaisons, choisissez les meilleures synergies et construisez un deck équilibré pour surpasser vos adversaires. Chaque décision compte : améliorez vos cartes, activez des bonus et adaptez-vous pour remporter la victoire en toute situation.',
    effect: 'rasengan',
    background: 'naruto'
  },
  {
    id: 3,
    sourceImage: 'snk.png',
    title: 'Combattez',
    content: 'Affrontez des joueurs du monde entier dans des duels intenses et épiques. Déployez vos personnages, utilisez vos techniques et tactiques pour prendre l’avantage. Activez des modes spéciaux, comme le mode Fury, pour renverser le cours de la bataille et triompher avec style dans des combats mémorables.',
    effect: 'enseiHeidan',
    background: 'livai'
  }
]

const cardStyles = computed(() =>
  gameSectionCards.map((card) => {
    const baseTranslation = 30 * (card.id - 1) // Calcule une valeur de base (id=1: 0, id=2: 30, id=3: 60, etc.)
    return { transform: `translateY(${baseTranslation - scrollProgress.value * baseTranslation}%)` }
  })
)
</script>

<template>
  <section id="game" ref="gameRef" class="flex gap-4 justify-between">
    <template v-for="(cardDetails, index) in gameSectionCards" :key="cardDetails.id">
      <PublicGameSectionCard :card="cardDetails" :style="cardStyles[index]"/>
    </template>
  </section>
</template>