<script setup lang="ts">
defineProps<{
  count: number
  imageSrc: string
}>()

const { t } = useI18n()
</script>

<template>
  <img
    v-for="(_, index) in count"
    :key="index"
    :src="imageSrc"
    :alt="t('Étoile de niveau')"
    :style="{ width: `${COLLECTION_CARD_WIDTH * CARD_WIDTH_STARS_EXPERIENCE_RATIO}px` }"
  >
</template>