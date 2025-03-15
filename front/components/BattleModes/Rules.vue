<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faScroll } from '@fortawesome/free-solid-svg-icons/faScroll';

const { t } = useI18n()

const isHovered = ref(false)

const handleRulesClick = () => {
  navigateTo('/rules')
}
</script>

<template>
  <div 
    class="relative text-end text-lg w-[50%] p-4 cursor-pointer overflow-hidden bg-secondary border-2 border-r-0 border-white group self-end"
    @click="handleRulesClick"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Fond animé -->
    <div class="absolute inset-0 bg-primary origin-right scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />

    <!-- Texte au-dessus -->
    <div 
      class="flex gap-4 items-center relative z-10 transition-all duration-300 ease-in-out"
      :class="{ 'tracking-widest text-white': isHovered, 'tracking-normal text-black': !isHovered }"
    >
      <font-awesome-icon
        :icon="faScroll"
      />
      <span>{{ t('Règles') }}</span>
    </div>
  </div>
</template>