<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBurst } from '@fortawesome/free-solid-svg-icons/faBurst'
import { faSyringe } from '@fortawesome/free-solid-svg-icons/faSyringe'
import { faChessRook } from '@fortawesome/free-solid-svg-icons/faChessRook'
import { faChessKing } from '@fortawesome/free-solid-svg-icons/faChessKing'

const props = defineProps<{
  cardType: string
}>()
const { t } = useI18n()

const typeIcon = computed(() => {
  switch (props.cardType) {
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
</script>

<template>
  <div class="flex justify-center items-center w-[7%] h-[6%] absolute top-[14.3%] right-[4.2%]">
    <font-awesome-icon 
      :icon="typeIcon" 
      :title="t(cardType)"
      class="text-white" 
      :style="{ fontSize: `${CARD_WIDTH * CARD_WIDTH_TYPE_ICON_RATIO}px` }"
    />
  </div>
</template>
