<script setup lang="ts">
const quickModeIsSelected = ref(true)


</script>

<template>
  <div class="flex flex-col gap-4">
    <CollectionFilters v-model:quick-mode-is-selected="quickModeIsSelected" />
    <CollectionList :quick-mode-is-selected="quickModeIsSelected" />
  </div>
</template>