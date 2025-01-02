<script setup lang="ts">
</script>

<template>
  <div class="height-screen flex items-center justify-center">
    <div class="relative flex px-10 justify-between w-1/2 h-1/2 bg-primary border-2 border-secondary rounded-xl">
      <!-- Image d'arrière-plan avec opacité -->
      <div 
        class="absolute inset-0 bg-menu bg-cover bg-no-repeat bg-center opacity-10" 
      />

      <!-- Contenu au-dessus de l'image -->
      <HomeMenu />
      <div class="relative z-10 text-white">Card</div>
    </div>
  </div>
</template>
