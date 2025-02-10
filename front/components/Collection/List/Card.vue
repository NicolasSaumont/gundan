<script setup lang='ts'>
const props = defineProps<{
  card: ICard
}>()

const { t } = useI18n()

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
    :style="{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px`,  perspective: '1000px' }"
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
  
      <CollectionListCardDesignElements :legion-name="legionName" :card />
  
      <CollectionListCardBorder />
  
      <CollectionListCardStats :card-stats="card.evolution.stats"/>
  
      <CollectionListCardSkills :card-skills="card.skills"/>
  
      <CollectionListCardLife :card-health="card.evolution.stats.health"/>
  
      <CollectionListCardExperience :card/>
  
      <CollectionListCardType :card-type="card.type"/>

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
