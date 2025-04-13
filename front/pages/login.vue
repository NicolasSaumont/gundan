<script setup lang='ts'>
</script>

<template>
  <div class="main-container h-full flex items-center justify-center">
    <div class="relative flex justify-between items-center w-3/4 h-3/4 bg-primary border-4 border-white rounded-xl overflow-hidden">
      <!-- Image d'arrière-plan avec opacité -->
      <div 
        class="absolute inset-0 bg-menu bg-cover bg-no-repeat bg-center opacity-10" 
      />

      <!-- Contenu au-dessus de l'image -->
      <div class="flex h-full w-full z-10">

        <Login />

        <LoginSeparator />

        <LoginSignup />
        
      </div>
    </div>
  </div>
</template>
