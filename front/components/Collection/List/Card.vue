<script setup lang='ts'>
const { t } = useI18n()
</script>

<template>
   <div class="relative w-[350px] h-[500px]">
    <img
      src="@/assets/images/cards/elements/card-background.png"
      :alt="t('Arrière plan de la carte')"
      class="absolute inset-0 w-full h-full"
    >
    <img
      src="@/assets/images/cards/legions/one-piece/luffy5.png"
      :alt="t('Personnage de la carte')"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90%]"
    >
    <img
      src="@/assets/images/cards/elements/card-content.png"
      :alt="t('Contenu de la carte')"
      class="absolute inset-0 w-full h-full"
    >
    <img
      src="@/assets/images/cards/elements/card-border.png"
      :alt="t('Bordure de la carte')"
      class="absolute inset-0 w-full h-full"
    >
  </div>
</template>
