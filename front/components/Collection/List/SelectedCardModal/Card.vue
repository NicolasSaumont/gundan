<script setup lang='ts'>
const props = defineProps<{
  card: ICard
}>()

const { formatLegionName } = useCard()

const legionName = ref<string>()

const cardElement = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)

const handleMouseMove = (event) => {
  if (!cardElement.value) return

  const rect = cardElement.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const deltaX = event.clientX - centerX
  const deltaY = event.clientY - centerY

  // Ajuste l'effet en réduisant la rotation
  rotateX.value = deltaY * ROTATION_SENSIBILITY
  rotateY.value = -deltaX * ROTATION_SENSIBILITY

  cardElement.value.style.transform = `rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`

  // Applique un mouvement sur l'effet holo
  cardElement.value.style.setProperty('--holo-rotate', `${rotateX.value + rotateY.value}deg`);
}

const resetCardPosition = () => {
  rotateX.value = 0
  rotateY.value = 0
  if (cardElement.value) {
    cardElement.value.style.transform = "rotateX(0deg) rotateY(0deg)"
  }
}

onMounted(() => {
  legionName.value = formatLegionName(props.card.legion.name!) // Je sais que le nom de la légion est toujours défini
})
</script>

<template>   
  <div 
    class="relative holo-card overflow-hidden"
    :style="{ width: `${SELECTED_CARD_WIDTH}px`, height: `${SELECTED_CARD_HEIGHT}px` }"
    ref="cardElement"
    @mousemove="handleMouseMove"
    @mouseleave="resetCardPosition"
  >
    <CollectionListCardBackground :legion-name="legionName" />

    <CollectionListCardCharacterImage
      :legion-name="legionName"
      :character-image="card.evolution.image"
    />

    <CollectionListCardDesignElements :legion-name="legionName" :card :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardBorder />

    <CollectionListCardStats :card-stats="card.evolution.stats" :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardSkills :card-skills="card.skills" :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardLife :card-health="card.evolution.stats.health" :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardExperience :card :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardType :card-type="card.type" :card-width="SELECTED_CARD_WIDTH" />
  </div>  
</template>
