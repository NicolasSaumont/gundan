<script setup lang="ts">
</script>

<template>
  <div id="top" class="flex flex-col" :style="{ gap: `${GAP_BETWEEN_SECTIONS}px` }">
    <PublicHeader />
    <main class="flex flex-col text-white"
      :style="{ gap: `${GAP_BETWEEN_SECTIONS}px` }">
      <div class="main-container flex flex-col" :style="{ gap: `${GAP_BETWEEN_SECTIONS}px` }">
        <PublicHeroSection />
        <PublicGameSection />
      </div>
      <PublicLegionsSection />
    </main>
    <PublicFooter/>
  </div>
</template>

<style>
.main-container {
  @apply max-w-[1240px] mx-auto;
}
</style>
