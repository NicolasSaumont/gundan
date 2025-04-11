<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons/faGem'

defineProps<{
  pack: IPack
}>()

const { t } = useI18n()

const isHovered = ref(false)
</script>

<template>
  <div 
    class="hover-reflection relative overflow-hidden flex flex-col items-center justify-between border-2 border-white bg-green-500/20 p-4 h-52 w-44 cursor-pointer"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="flex items-center gap-2">
      <div>{{ pack.price }}</div>
      <font-awesome-icon :icon="faGem" size="lg" />
    </div>
    <div>{{ pack.name }}</div>
    <div>{{ pack.cardsCount > 1 ? t(pack.cardsCount + ' cartes') : t(pack.cardsCount + ' carte') }}</div>
  </div>
</template>

<style scoped>
.hover-reflection::before {
  content: '';
  @apply absolute top-[-75%] left-[-75%] w-[300%] h-[20%] pointer-events-none transition-transform duration-700 ease-in-out;
  transform: rotate(135deg);
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(255, 255, 255, 0) 80%
  );
}

.hover-reflection:hover::before {
  transform: translateY(1000%) rotate(135deg);
}
</style>