<script setup lang='ts'>
const isVisible = defineModel<boolean>('isVisible', { required: true })

const { selectedCard } = storeToRefs(useCardStore())
</script>

<template>
  <Modal v-model:is-visible="isVisible">
    <CollectionListSelectedCardModalCard v-if="selectedCard" :card="selectedCard"/>
    <div class="bg-white p-4 rounded-lg border border-gray-300">
      {{ selectedCard?.name }}
    </div>
  </Modal>
</template>
