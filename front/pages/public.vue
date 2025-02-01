<script setup lang="ts">
definePageMeta({
  layout: 'public',
})
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

