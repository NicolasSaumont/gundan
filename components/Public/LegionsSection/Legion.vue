<script setup lang='ts'>
defineProps<{
  legion: ILegion
}>()
</script>

<template>
  <div class="w-1/2 p-4 slides border-2 rounded-xl">
    <div class="flex gap-4">
      <img :src="legion.image" class="rounded-xl shadow shadow-white">
      <h3>{{ legion.name }}</h3>
    </div>
    <p>{{ legion.description }}</p>
  </div>
</template>
