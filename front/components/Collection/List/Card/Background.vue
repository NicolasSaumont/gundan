<script setup lang='ts'>
defineProps<{
  legionName?: string
}>()

const { t } = useI18n()
</script>

<template>
  <img
    :src="`_nuxt/assets/images/cards/legions/${legionName}/background.png`"
    :alt="t('Arrière plan spécifique à la légion')"
    class="absolute inset-0 w-full h-full"
  >
  <img
    src="@/assets/images/cards/elements/card-background.png"
    :alt="t('Arrière plan de la carte')"
    class="absolute inset-0 w-full h-full"
  >
</template>
