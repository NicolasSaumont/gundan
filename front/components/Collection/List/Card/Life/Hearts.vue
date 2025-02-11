<script setup lang="ts">
defineProps<{
  hearts: number
  reverse?: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <div :class="['flex h-full', { 'flex-col justify-end items-center ': !reverse, 'flex-col-reverse': reverse }]">
    <img
      v-for="(_, index) in Array(hearts)"
      :key="index"
      src="@/assets/images/cards/elements/heart.png"
      :alt="t('Coeur de vie')"
      :style="{ width: `${COLLECTION_CARD_WIDTH * CARD_WIDTH_HEARTS_RATIO}px` }"
    >
  </div>
</template>
