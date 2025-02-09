<script setup lang='ts'>
defineProps<{
  legionName?: string
  characterImage: string
}>()

const { t } = useI18n()
</script>

<template>
  <img
    :src="`_nuxt/assets/images/cards/legions/${legionName}/characters/${characterImage}.png`"
    :alt="t('Personnage de la carte')"
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]"
  >
</template>
