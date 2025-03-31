<script setup lang='ts'>
defineProps<{
  pack: IPack
}>()

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center justify-between border-2 border-white bg-green-500/20 p-4 h-52 w-44">
    <div>{{ pack.price > 1 ? t(pack.price + ' crédits') : t(pack.price + ' crédit') }}</div>
    <div>{{ pack.name }}</div>
    <div>{{ pack.cardsCount > 1 ? t(pack.cardsCount + ' cartes') : t(pack.cardsCount + ' carte') }}</div>
  </div>
</template>
