<script setup lang='ts'>
const { t } = useI18n()

const isHovered = ref(false)

const handleRulesClick = () => {
  navigateTo('/rules')
}
</script>

<template>
  <div 
    class="relative text-center text-lg w-full p-4 cursor-pointer overflow-hidden bg-secondary border-2 border-r-0 border-white group"
    @click="handleRulesClick"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Fond animé -->
    <div class="absolute inset-0 bg-primary origin-right scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />

    <!-- Texte au-dessus -->
    <div 
      class="relative z-10 transition-all duration-300 ease-in-out"
      :class="{ 'tracking-widest text-white': isHovered, 'tracking-normal text-black': !isHovered }"
    >
      {{ t('Règles') }}
    </div>
  </div>
</template>