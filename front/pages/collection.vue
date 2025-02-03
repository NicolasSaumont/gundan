<script setup lang="ts">
const gameMode = ref<GameModeType>('quick')
</script>

<template>
  <div class="flex flex-col gap-4">
    <CollectionFilters v-model:game-mode="gameMode" />
    <CollectionList :game-mode="gameMode" />
  </div>
</template>