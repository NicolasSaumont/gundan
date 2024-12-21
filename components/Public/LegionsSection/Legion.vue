<script setup lang='ts'>
defineProps<{
  legion: ILegion
}>()

const { t } = useI18n()
</script>

<template>
  <div class="slides w-1/2 flex flex-col gap-4 justify-around p-8 border-2 rounded-xl">
    <div class="flex gap-4 justify-between items-center">
      <h3 class="font-bungee text-3xl">{{ t(legion.name) }}</h3>
      <img :src="legion.image" :alt="t(`Logo de la légion ${legion.name}`)" class="rounded-xl">
    </div>
    <h4 class="font-caveat text-3xl text-secondary">{{ t(legion.tagLine) }}</h4>
    <p>{{ t(legion.description) }}</p>
  </div>
</template>
