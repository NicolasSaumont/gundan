<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBurst } from '@fortawesome/free-solid-svg-icons/faBurst'

const { t } = useI18n()
</script>

<template>
  <div class="relative" :style="{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }">
    <img
      src="@/assets/images/cards/legions/one-piece/background.png"
      :alt="t('Arrière plan spécifique à la légion')"
      class="absolute inset-0 w-full h-full"
    >
    <img
      src="@/assets/images/cards/elements/card-background.png"
      :alt="t('Arrière plan de la carte')"
      class="absolute inset-0 w-full h-full"
    >
    <img
      src="@/assets/images/cards/legions/one-piece/luffy5.png"
      :alt="t('Personnage de la carte')"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]"
    >
    <img
      src="@/assets/images/cards/elements/card-content.png"
      :alt="t('Contenu de la carte')"
      class="absolute inset-0 w-full h-full"
    >
    <img
      src="@/assets/images/cards/elements/name-tag/unusual.png"
      :alt="t('Encadré coloré du nom en fonction de la rareté de la carte')"
      class="absolute top-[4.8%] right-[1.5%] w-[77%]"
    >
    <img
      src="@/assets/images/cards/legions/one-piece/logo.png"
      :alt="t('Logo de la légion')"
      class="absolute top-[5%] left-[6.3%] w-[10%]"
    >
    <img
      src="@/assets/images/cards/elements/card-border.png"
      :alt="t('Bordure de la carte')"
      class="absolute inset-0 w-full h-full"
    >
    <div class="flex items-center justify-center w-[80%] h-[7%] absolute top-[5%] right-0">
      <div 
        class="font-bloom-monday text-white tracking-widest drop-shadow-[2px_2px_0_rgb(0,0,0)]"
        :style="{ fontSize: `${CARD_WIDTH * 0.08}px` }"
      >
        Monkey D. Luffy
      </div>
    </div>
    <div class="flex items-center justify-center w-[7%] h-[7%] absolute top-[33.5%] left-[4.6%]">
      <div 
        class="font-bloom-monday text-white"
        :style="{ fontSize: `${CARD_WIDTH * 0.1}px` }"
      >
        8
      </div>
    </div>
    <div class="flex items-center justify-center w-[7%] h-[7%] absolute top-[47%] left-[4.6%]">
      <div 
        class="font-bloom-monday text-white"
        :style="{ fontSize: `${CARD_WIDTH * 0.1}px` }"
      >
        7
      </div>
    </div>
    <div class="flex items-center justify-center w-[7%] h-[7%] absolute top-[60.5%] left-[4.6%]">
      <div 
        class="font-bloom-monday text-white"
        :style="{ fontSize: `${CARD_WIDTH * 0.1}px` }"
      >
        6
      </div>
    </div>
    <div class="flex items-center w-[70%] h-[7%] absolute bottom-[19%] right-0">
      <div 
        class="font-caveat"
        :style="{ fontSize: `${CARD_WIDTH * 0.07}px` }"
      >
        Puissance +2
      </div>
    </div>
    <div class="flex items-center w-[70%] h-[7%] absolute bottom-[4.5%] right-0">
      <div 
        class="font-caveat"
        :style="{ fontSize: `${CARD_WIDTH * 0.07}px` }"
      >
        Puissance et défense +1
      </div>
    </div>
    <font-awesome-icon 
      :icon="faBurst" 
      :title="t('Attaquant')"
      class="text-white absolute top-[15.3%] right-[5%]" 
      :style="{ fontSize: `${CARD_WIDTH * 0.055}px` }"
    />
  </div>
</template>
