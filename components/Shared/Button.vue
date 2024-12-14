<script setup lang="ts">
defineProps<{
  textContent: string
}>()
const { t } = useI18n()
</script>

<template>
  <div
    class="tracking-widest text-white font-semibold px-3 py-2 rounded-lg hover:cursor-pointer hover:bg-white hover:shadow-2xl hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary active:text-secondary transition-all duration-200 ease-in-out">
    {{ t(textContent) }}
  </div>
</template>