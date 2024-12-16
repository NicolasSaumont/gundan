<script setup lang="ts">
const { headerHeight } = useMenu()

const heroHeight = ref(0)

onMounted(() => {
  if (!window) return
  heroHeight.value = window.innerHeight - headerHeight.value - 2 * GAP_BETWEEN_SECTIONS;
})
</script>

<template>
  <div id="top">
    <PublicHeader :style="{ marginBottom: `${GAP_BETWEEN_SECTIONS}px` }" />
    <main class="flex flex-col text-white max-w-[960px] mx-auto"
      :style="{ gap: `${GAP_BETWEEN_SECTIONS}px`, marginBottom: `${GAP_BETWEEN_SECTIONS}px` }">
      <section id="hero" class="flex w-full mx-auto border border-primary rounded-lg"
        :style="{ height: `${heroHeight}px` }">
        <div class="w-1/3 flex flex-col gap-10 justify-center items-center border border-secondary rounded">
          <div class="flex flex-col items-center gap-4">
            <img src="~/assets/images/logo.jpg" width="250px" class="rounded-xl shadow shadow-white">
            <h1 class="font-bungee text-6xl">Gundan</h1>
          </div>
          <p>Bouton Jouer</p>
        </div>
        <div class="w-2/3 flex justify-center items-center border border-secondary rounded">
          <p>Vidéo</p>
        </div>
      </section>
      <section id="game" class="border border-primary rounded-lg h-[800px]">
        <p>Bullet points</p>
      </section>
      <section id="legions" class="border border-primary rounded-lg h-[800px]">
        <p>Légions</p>
      </section>
    </main>
    <footer class="text-white border border-primary rounded-lg h-[200px]">
      <p>Footer</p>
    </footer>
  </div>
</template>