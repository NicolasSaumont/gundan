<script setup lang="ts">
</script>

<template>
  <div id="top">
    <PublicHeader :style="{ marginBottom: `${GAP_BETWEEN_SECTIONS}px` }" />
    <main class="flex flex-col text-white max-w-[960px] mx-auto"
      :style="{ gap: `${GAP_BETWEEN_SECTIONS}px`, marginBottom: `${GAP_BETWEEN_SECTIONS}px` }">
      <PublicHeroSection />
      <PublicGameSection />
      <section id="legions" class="border border-primary rounded-lg h-[800px]">
        <p>Légions</p>
      </section>
    </main>
    <footer class="text-white border border-primary rounded-lg h-[200px]">
      <p>Footer</p>
    </footer>
  </div>
</template>
