<script setup lang='ts'>
defineProps<{
  quickModeIsSelected: boolean
}>()

const { setCards, cards } = useCardStore()

onMounted(async () => {
  await setCards()
})
</script>

<template>
  <div class="flex gap-4">
    <CollectionListCard v-for="card in cards" :key="card.id" :card="card" :quick-mode-is-selected="quickModeIsSelected" />
  </div>
</template>
