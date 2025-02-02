<script setup lang='ts'>
const { setCards, cards } = useCardStore()

onMounted(async () => {
  await setCards()
})
</script>

<template>
  <div class="flex gap-4">
    <CollectionListCard v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>
