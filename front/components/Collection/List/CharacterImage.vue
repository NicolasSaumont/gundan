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
    class="absolute inset-0 transform transition-all duration-500 ease-in-out max-w-none translate-x-[-10%]"
    :class="{ 'opacity-100 translate-y-[0%]': isHovered, 'opacity-0 translate-y-[30%]': !isHovered }"
    :style="{ width: '120%' }"
  >
</template>
