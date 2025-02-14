<script setup lang="ts">
defineProps<{
  count: number
  imageSrc: string
  cardWidth: number
}>()

const { t } = useI18n()
</script>

<template>
  <img
    v-for="(_, index) in count"
    :key="index"
    :src="imageSrc"
    :alt="t('Étoile de niveau')"
    :style="{ width: `${cardWidth * CARD_WIDTH_STARS_EXPERIENCE_RATIO}px` }"
  >
</template>