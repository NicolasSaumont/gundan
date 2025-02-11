<script setup lang='ts'>
defineProps<{
  legionName?: string
  card: ICard
}>()

const { t } = useI18n()

const getRarityImage = (rarity: CardRarity) => {
  return rarityImages[rarity]
}
</script>

<template>
  <img
    src="@/assets/images/cards/elements/card-content.png"
    :alt="t('Contenu de la carte')"
    class="absolute inset-0 w-full h-full"
  >
  <img
    :src="`_nuxt/assets/images/cards/elements/name-tag/${getRarityImage(card.rarity)}`"
    :alt="t('Encadré coloré du nom en fonction de la rareté de la carte')"
    class="absolute top-[4.8%] right-[1.5%] w-[77%]"
  >
  <img
    src="@/assets/images/cards/elements/name-tag/texture.png"
    :alt="t('Texture de l\'encadré coloré du nom de la carte')"
    class="absolute top-[4.8%] right-[1.5%] w-[77%]"
  >
  <img
    :src="`_nuxt/assets/images/cards/legions/${legionName}/logo.png`"
    :alt="t('Logo de la légion')"
    :title="`Légions : ${card.legion.name}`"
    class="absolute top-[5%] left-[6.3%] w-[10%]"
  >
  <div 
    class="flex items-center justify-center w-[80%] h-[7%] font-bloom-monday text-white tracking-widest drop-shadow-[2px_2px_0_rgb(0,0,0)] absolute top-[5%] right-0"
    :style="{ fontSize: `${COLLECTION_CARD_WIDTH * CARD_WIDTH_NAME_RATIO}px` }"
  >
    {{ card.name }}
  </div>
</template>
