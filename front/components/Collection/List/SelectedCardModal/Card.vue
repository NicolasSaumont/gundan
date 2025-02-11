<script setup lang='ts'>
const props = defineProps<{
  card: ICard
}>()

const { formatLegionName } = useCard()

const legionName = ref<string>()

onMounted(() => {
  legionName.value = formatLegionName(props.card.legion.name!) // Je sais que le nom de la légion est toujours défini
})
</script>

<template>   
  <div 
    class="relative"
    :style="{ width: `${SELECTED_CARD_WIDTH}px`, height: `${SELECTED_CARD_HEIGHT}px` }"
  >
    <CollectionListCardBackground :legion-name="legionName"/>

    <CollectionListCardCharacterImage
      :legion-name="legionName"
      :character-image="card.evolution.image"
    />

    <CollectionListCardDesignElements :legion-name="legionName" :card />

    <CollectionListCardBorder />

    <CollectionListCardStats :card-stats="card.evolution.stats"/>

    <CollectionListCardSkills :card-skills="card.skills"/>

    <CollectionListCardLife :card-health="card.evolution.stats.health"/>

    <CollectionListCardExperience :card/>

    <CollectionListCardType :card-type="card.type"/>
  </div>  
</template>
