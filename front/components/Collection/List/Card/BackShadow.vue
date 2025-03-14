<script setup lang='ts'>
defineProps<{
  isHovered: boolean
}>()
</script>

<template>
  <div 
    class="absolute inset-0 w-full h-full rounded-xl transition-opacity duration-500 ease-in-out pointer-events-none"
    :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
    style="
      content: '';
      position: absolute;
      top: 87%;
      left: 50%;
      width: 102%;
      height: 12%;
      background: rgba(255, 255, 255, 0.4);
      filter: blur(10px);
      transform: translateX(-50%);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    "
  />
</template>
