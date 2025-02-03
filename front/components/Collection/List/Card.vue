<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBurst } from '@fortawesome/free-solid-svg-icons/faBurst'
import { faSyringe } from '@fortawesome/free-solid-svg-icons/faSyringe'
import { faChessRook } from '@fortawesome/free-solid-svg-icons/faChessRook'
import { faChessKing } from '@fortawesome/free-solid-svg-icons/faChessKing'

const props = defineProps<{
  card: ICard
  gameMode: GameModeType
}>()

const { t } = useI18n()

const cardName = ref<string>()
const legionName = ref<string>()

const fullLife = ref<number[]>([]) // Vie totale

const rightColumnLife = ref<number[]>([]) // Jusqu'à 10 cœurs dans la colonne de droite
const leftColumnLife = ref<number[]>([]) // Le reste va dans la colonne de gauche

const maxLevel = ref(0)
const currentLevel = ref(0)
const differenceFromCurrentToMaxLevel = ref(0)

const cardPower = ref(0)
const cardDefense = ref(0)
const cardDamage = ref(0)

const formatLegionName = (legionName: string) => {
  return legionName.toLowerCase().replace(/\s+/g, '-') // Remplace les majuscules en minuscules et espaces en tirets
}

const getRarityImage = (rarity: CardRarity) => {
  return rarityImages[rarity]
}

const typeIcon = computed(() => {
  switch (props.card.type) {
    case 'Attaquant':
      return faBurst

    case 'Défenseur':
      return faChessRook
  
    case 'Soutien':
      return faSyringe
  
    case 'Stratège':
      return faChessKing
  
    default:
      return faBurst
  }
})

onMounted(() => {
  cardName.value = props.card.name
  legionName.value = formatLegionName(props.card.legion.name!) // Je sais que le nom de la légion est toujours défini

  maxLevel.value = props.card.maxLevel
  currentLevel.value = props.card.evolution.level
  differenceFromCurrentToMaxLevel.value = maxLevel.value - currentLevel.value

  fullLife.value = Array(props.card.evolution.stats.health)
  rightColumnLife.value = fullLife.value.slice(0, HEARTS_BY_COLUMN) // Jusqu'à 10 cœurs dans la colonne de droite
  leftColumnLife.value = fullLife.value.slice(HEARTS_BY_COLUMN) // Le reste va dans la colonne de gauche

  cardPower.value = props.card.evolution.stats.power
  cardDefense.value = props.card.evolution.stats.defense
  cardDamage.value = props.card.evolution.stats.damage
})
</script>

<template>
  <div class="relative" :style="{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }">
    <img
      :src="`_nuxt/assets/images/cards/legions/${legionName}/background.png`"
      :alt="t('Arrière plan spécifique à la légion')"
      class="absolute inset-0 w-full h-full"
    >
    <img
      src="@/assets/images/cards/elements/card-background.png"
      :alt="t('Arrière plan de la carte')"
      class="absolute inset-0 w-full h-full"
    >
    <img
      :src="`_nuxt/assets/images/cards/legions/${legionName}/characters/${card.evolution.image}.png`"
      :alt="t('Personnage de la carte')"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]"
    >
    <img
      src="@/assets/images/cards/elements/card-content.png"
      :alt="t('Contenu de la carte')"
      class="absolute inset-0 w-full h-full"
    >
    <img
      :src="`_nuxt/assets/images/cards/elements/name-tag/${getRarityImage(card.rarity)}`"
      :alt="t('Encadré coloré du nom en fonction de la rareté de la carte')"
      class="absolute top-[4.8%] right-[1.5%] w-[77%]"
    >
    <img
      src="@/assets/images/cards/elements/name-tag/texture.png"
      :alt="t('Texture de l\'encadré coloré du nom de la carte')"
      class="absolute top-[4.8%] right-[1.5%] w-[77%]"
    >
    <img
      :src="`_nuxt/assets/images/cards/legions/${legionName}/logo.png`"
      :alt="t('Logo de la légion')"
      class="absolute top-[5%] left-[6.3%] w-[10%]"
    >
    <img
      src="@/assets/images/cards/elements/card-border.png"
      :alt="t('Bordure de la carte')"
      class="absolute inset-0 w-full h-full"
    >
    <div class="flex items-center justify-center w-[80%] h-[7%] absolute top-[5%] right-0">
      <div 
        class="font-bloom-monday text-white tracking-widest drop-shadow-[2px_2px_0_rgb(0,0,0)]"
        :style="{ fontSize: `${CARD_WIDTH * 0.08}px` }"
      >
        {{ cardName }}
      </div>
    </div>
    <div class="flex items-center justify-center w-[7%] h-[7%] absolute top-[33.5%] left-[4.6%]">
      <div 
        class="font-bloom-monday text-white"
        :style="{ fontSize: `${CARD_WIDTH * 0.08}px` }"
      >
      {{ cardPower }}
      </div>
    </div>
    <div class="flex items-center justify-center w-[7%] h-[7%] absolute top-[46.7%] left-[4.6%]">
      <div 
        class="font-bloom-monday text-white"
        :style="{ fontSize: `${CARD_WIDTH * 0.08}px` }"
      >
      {{ cardDefense }}
      </div>
    </div>
    <div class="flex items-center justify-center w-[7%] h-[7%] absolute top-[60%] left-[4.6%]">
      <div 
        class="font-bloom-monday text-white"
        :style="{ fontSize: `${CARD_WIDTH * 0.08}px` }"
      >
      {{ cardDamage }}
      </div>
    </div>
    <div class="flex items-center w-[70%] h-[7%] absolute bottom-[19%] right-0">
      <div 
        class="font-caveat"
        :title="gameMode === 'quick' ? card.skills.capacity.quickMode.description : card.skills.capacity.classicalMode.description"
        :style="{ fontSize: `${CARD_WIDTH * 0.07}px` }"
      >
        {{ gameMode === 'quick' ? card.skills.capacity.quickMode.code : card.skills.capacity.classicalMode.name }}
      </div>
    </div>
    <div class="flex items-center w-[70%] h-[7%] absolute bottom-[4.5%] right-0">
      <div 
        class="font-caveat"
        :title="card.skills.bonus.description"
        :style="{ fontSize: `${CARD_WIDTH * 0.07}px` }"
      >
        {{ gameMode === 'quick' ? card.skills.bonus.code : card.skills.bonus.name }}
      </div>
    </div>
    <div v-if="gameMode === 'classical'" class="h-[43%] absolute top-[23%] right-[4%] flex items-end justify-end gap-1">
      <div v-if="fullLife.length > 10" class="flex flex-col-reverse h-full">
        <img
          v-for="(heart, index) in leftColumnLife"
          :key="'left-' + index"
          src="@/assets/images/cards/elements/heart.png"
          :alt="t('Coeur de vie')"
          :style="{ width: `${CARD_WIDTH * 0.057}px` }"
        >
      </div>
      <div class="flex flex-col justify-end items-center h-full">
        <img
          v-for="(heart, index) in rightColumnLife"
          :key="'right-' + index"
          src="@/assets/images/cards/elements/heart.png"
          :alt="t('Coeur de vie')"
          :style="{ width: `${CARD_WIDTH * 0.057}px` }"
        >
      </div>
    </div>
    <div class="flex gap-2 w-[40%] h-[5%] absolute top-[15%] left-[5%]">
      <img
        v-for="(star, index) in currentLevel"
        :key="index"
        src="@/assets/images/cards/elements/star.png"
        :alt="t('Étoile de niveau atteint')"
        :style="{ width: `${CARD_WIDTH * 0.057}px` }"
      >
      <img
        v-for="(star, index) in differenceFromCurrentToMaxLevel"
        :key="index"
        src="@/assets/images/cards/elements/star-black-white.png"
        :alt="t('Étoile de niveau non atteint')"
        :style="{ width: `${CARD_WIDTH * 0.057}px` }"
      >
    </div>
    <div class="flex justify-center items-center w-[7%] h-[6%] absolute top-[14.3%] right-[4.2%]">
      <font-awesome-icon 
        :icon="typeIcon" 
        :title="t(props.card.type)"
        class="text-white" 
        :style="{ fontSize: `${CARD_WIDTH * 0.055}px` }"
      />
    </div>
  </div>
</template>
