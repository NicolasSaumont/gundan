<script setup lang='ts'>
const { loaderIsActive } = storeToRefs(useAppStore())
const { setCards, setSelectedCard } = useCardStore()
const { cards } = storeToRefs(useCardStore())

const selectedCardDetailsModalIsVisible = ref(false)

const handleSelectCardClick = (cardId: number) => {
  setSelectedCard(cardId)
  selectedCardDetailsModalIsVisible.value = true
}

onMounted(async () => {
  await setCards()
})
</script>

<template>
  <div class="flex gap-6 flex-wrap">
    <CollectionListCard v-for="card in cards" :key="card.id" :card="card" @click="handleSelectCardClick(card.id)"/>
  </div>
  <FullLoader v-if="loaderIsActive"/>
  <CollectionListSelectedCardModal v-model:is-visible="selectedCardDetailsModalIsVisible" />
</template>
