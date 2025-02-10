<script setup lang='ts'>
defineProps<{
  legionName?: string
  characterImage: string
  isHovered?: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <img
    :src="`_nuxt/assets/images/cards/legions/${legionName}/characters/${characterImage}.png`"
    :alt="t('Personnage de la carte')"
    class="aboslute inset-0 transform transition-all duration-500 ease-in-out"
    :class="{ 'opacity-100 -translate-y-[110%]': isHovered, 'opacity-0 -translate-y-[80%]': !isHovered }"
  >
</template>
