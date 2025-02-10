<script setup lang='ts'>
defineProps<{
  isHovered: boolean
}>()
</script>

<template>
  <div 
    class="absolute inset-0 w-full h-full rounded-2xl transition-opacity duration-500 ease-in-out pointer-events-none"
    :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
    style="
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle, transparent 100px, black);
      transform: translateX(-50%);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    "
  />
</template>
