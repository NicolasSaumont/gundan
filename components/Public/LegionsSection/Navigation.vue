<script setup lang='ts'>
const { legions } = useLegionsStore()
const { activeLegionIndex, isFlipping } = storeToRefs(useLegionsStore())
const { t } = useI18n()

// Retourne la carte et change de légion
const flipCard = (direction: "next" | "previous") => {
  if (isFlipping.value) return; // Empêche une double animation

  isFlipping.value = true;

  // Attendre que la carte soit "retournée" pour changer l'index
  setTimeout(() => {
    if (direction === "next") {
      activeLegionIndex.value = activeLegionIndex.value !== legions.length ? activeLegionIndex.value + 1 : 1;
    } else {
      activeLegionIndex.value = activeLegionIndex.value !== 1 ? activeLegionIndex.value - 1 : legions.length;
    }
  }, 300); // Correspond à mi-parcours de l'animation

  // Terminer l'animation après la rotation complète
  setTimeout(() => {
    isFlipping.value = false;
  }, 600); // Durée totale de l'animation
};
</script>

<template>
  <nav class="flex gap-24">
    <img src="@/assets/images/arrowLeft.png" 
      :alt="t('Flèche de sélection de la légion précédente')" 
      :title="t('Légion précédente')"
      class="cursor-pointer shaking-animation"
      @click="flipCard('previous')"
    >
    <img 
      src="@/assets/images/arrowRight.png" 
      :alt="t('Flèche de sélection de la légion suivante')" 
      :title="t('Légion suivante')"
      class="cursor-pointer shaking-animation animation-delay-50"
      @click="flipCard('next')"
    >
  </nav>
</template>
