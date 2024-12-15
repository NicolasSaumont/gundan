<script setup lang="ts">
const { headerHeight } = useMenu()

const heroHeight = ref(0)

onMounted(() => {
  if (!window) return
  heroHeight.value = window.innerHeight - headerHeight.value - GAP_BETWEEN_SECTIONS;
})
</script>

<template>
  <div id="top">
    <PublicHeader :style="{ marginBottom: `${GAP_BETWEEN_SECTIONS}px` }" />
    <main class="flex flex-col text-white "
      :style="{ gap: `${GAP_BETWEEN_SECTIONS}px`, marginBottom: `${GAP_BETWEEN_SECTIONS}px` }">
      <section id="hero" class="flex w-full border border-primary rounded-lg" :style="{ height: `${heroHeight}px` }">
        <div class="grow flex flex-col gap-4 justify-center items-center border border-secondary rounded">
          <p>Logo</p>
          <p>Bouton Jouer</p>
        </div>
        <div class="grow flex justify-center items-center border border-secondary rounded">
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