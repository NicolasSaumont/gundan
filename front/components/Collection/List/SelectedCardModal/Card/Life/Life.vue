<script setup lang='ts'>
const props = defineProps<{
  cardHealth: number
}>()

const { gameMode } = storeToRefs(useCollectionStore())

const rightColumnLife = computed(() => Math.min(props.cardHealth, HEARTS_BY_COLUMN));
const leftColumnLife = computed(() => Math.max(0, props.cardHealth - HEARTS_BY_COLUMN));
</script>

<template>
  <div v-if="gameMode === 'classical'" class="h-[43%] absolute top-[23%] right-[4%] flex items-end justify-end gap-1">
    <CollectionListSelectedCardModalCardLifeHearts v-if="cardHealth > HEARTS_BY_COLUMN" :hearts="leftColumnLife" :reverse="true" />
    <CollectionListSelectedCardModalCardLifeHearts :hearts="rightColumnLife" />
  </div>
</template>
