<script setup lang='ts'>
const props = defineProps<{
  card: ICard
}>()

const { formatLegionName } = useCard()

const legionName = ref<string>()

onMounted(() => {
  legionName.value = formatLegionName(props.card.legion.name!) // Assurez-vous que le nom est bien défini
})
</script>

<template>
  <div
    class="relative holo-card overflow-hidden"
    :style="{ width: `${SELECTED_CARD_WIDTH}px`, height: `${SELECTED_CARD_HEIGHT}px` }"
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
