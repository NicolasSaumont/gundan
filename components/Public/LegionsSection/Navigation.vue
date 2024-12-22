<script setup lang='ts'>
//const sliderIndex = defineModel<number>('sliderIndex', { required: true })

const { legions } = useLegionsStore()
const { t } = useI18n()

//const handlePreviousLegionClick = () => {
//  if (sliderIndex.value !== 1) {
//    sliderIndex.value -= 1
//  } else {
//    sliderIndex.value = legions.length
//  }
//} 

//const handleNextLegionClick = () => {
//  if (sliderIndex.value !== legions.length) {
//    sliderIndex.value += 1
//  } else {
//    sliderIndex.value = 1
//  }
//} 

defineEmits(["slider-index-next", "slider-index-previous"]);

</script>

<template>
  <nav class="flex gap-24">
    <img src="@/assets/images/arrowLeft.png" 
      :alt="t('Flèche de sélection de la légion précédente')" 
      :title="t('Légion précédente')"
      class="cursor-pointer shaking-animation"
      @click="$emit('slider-index-previous')"
    >
    <img 
      src="@/assets/images/arrowRight.png" 
      :alt="t('Flèche de sélection de la légion suivante')" 
      :title="t('Légion suivante')"
      class="cursor-pointer shaking-animation animation-delay-50"
      @click="$emit('slider-index-next')"
    >
  </nav>
</template>
