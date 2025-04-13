<script setup lang='ts'>
const loginStyle = "translate-x-[15%]"

const loginForm = ref(true)

const toggleForm = () => {
  loginForm.value = !loginForm.value
}
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
        <div class="grow border-r-4 border-white">form</div>

        <!-- Cercle blanc centré sur la bordure -->
        <div 
          class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-28 h-28 bg-white rounded-full overflow-hidden cursor-pointer z-10 transition-all duration-500 ease-in-out"
          :class="loginForm ? 'left-[66.66%]' : 'left-[33.33%]'"
          @click="toggleForm"
        >
          <div 
            class="flex items-center -translate-y-[5%] transition-all duration-500 ease-in-out"
            :class="loginForm ? 'translate-x-[15%]' : '-translate-x-[350%]'"
          >
            <img
              class="w-[70%]"
              src="/_nuxt/assets/images/kamehameha-loader/goku.png"
            >
            <img
              class="w-[45%] -translate-x-[10%]"
              src="/_nuxt/assets/images/kamehameha-loader/goku-energy.png"
            >
            <img
              class="-translate-x-[10%]"
              src="/_nuxt/assets/images/kamehameha-loader/ray.png"
            >
            <img
              class="-translate-x-[50%] translate-y-[4%] z-50"
              src="/_nuxt/assets/images/kamehameha-loader/collision.png"
            >
            <img
              class="-translate-x-[70%]"
              src="/_nuxt/assets/images/kamehameha-loader/ray.png"
            >
            <img
              class="w-[45%] -translate-x-[160%]"
              src="/_nuxt/assets/images/kamehameha-loader/vegeta-energy.png"
            >
            <img
              class="w-[50%] -translate-x-[160%]"
              src="/_nuxt/assets/images/kamehameha-loader/vegeta.png"
            >
          </div>
        </div>

        <div 
          class="transition-all duration-500 ease-in-out"
          :class="loginForm ? 'w-[33.33%]' : 'w-[66.66%]'"
        >
          <Button class="z-100" text="Je n'ai pas de compte" @click="toggleForm"></Button>
        </div>
      </div>
    </div>
  </div>
</template>
