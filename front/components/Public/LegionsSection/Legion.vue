<script setup lang='ts'>
defineProps<{
  legion: ILegion
}>()

const { t } = useI18n()
</script>

<template>
  <article class="flex gap-4 p-8 border-4 border-secondary rounded-xl bg-white text-tertiary h-full shadow-2xl">
    <div class="flex flex-col gap-4 justify-around">
      <div class="flex gap-4 justify-between items-center">
        <div class="flex flex-col font-bungee">
          <p>{{ t('Légion :') }}</p>
          <h3 class="text-3xl text-secondary">{{ t(legion.name) }}</h3>
        </div>
      </div>
      <h4 class="font-caveat text-2xl">{{ t(legion.tagLine) }}</h4>
      <p>{{ t(legion.description) }}</p>
    </div>
    <img :src="legion.image" :alt="t(`Logo de la légion ${legion.name}`)" class="rounded-xl">
  </article>
</template>
