<script setup lang='ts'>
const props = defineProps<{
  card: ICard
}>()

const { formatLegionName } = useCard()

const legionName = ref<string>()
const isHovered = ref(false)

onMounted(() => {
  legionName.value = formatLegionName(props.card.legion.name!) // Je sais que le nom de la légion est toujours défini
})
</script>

<template>
  <!-- Perspective -->
  <div 
    class="relative cursor-pointer"
    :style="{ width: `${COLLECTION_CARD_WIDTH}px`, height: `${COLLECTION_CARD_HEIGHT}px`,  perspective: '1000px' }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <CollectionListCardBackShadow :is-hovered="isHovered" />

    <!-- Rotation -->
    <div
      class="w-full h-full transition-transform duration-500 ease-in-out"
      :style="{ transform: isHovered ? 'rotateX(30deg)' : 'rotateX(0deg)' }"
    >
    
      <CollectionListCardBackground :legion-name="legionName"/>
  
      <CollectionListCardCharacterImage
        :legion-name="legionName"
        :character-image="card.evolution.image"
        :is-hovered="isHovered"
      />
  
      <CollectionListCardDesignElements :legion-name="legionName" :card :card-width="COLLECTION_CARD_WIDTH" />
  
      <CollectionListCardBorder />
  
      <CollectionListCardStats :card-stats="card.evolution.stats" :card-width="COLLECTION_CARD_WIDTH" />
  
      <CollectionListCardSkills :card-skills="card.skills" :card-width="COLLECTION_CARD_WIDTH" />
  
      <CollectionListCardLife :card-health="card.evolution.stats.health" :card-width="COLLECTION_CARD_WIDTH" />
  
      <CollectionListCardExperience :card :card-width="COLLECTION_CARD_WIDTH" />
  
      <CollectionListCardType :card-type="card.type" :card-width="COLLECTION_CARD_WIDTH" />

      <CollectionListCardFrontShadow :is-hovered="isHovered" />
    </div>

    <!-- Hover Character Image-->
    <CollectionListCharacterImage
      :legion-name="legionName" 
      :character-image="card.evolution.image"
      :is-hovered="isHovered"
    />
  </div>
</template>
