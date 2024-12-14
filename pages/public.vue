<script setup lang="ts">

</script>

<template>
  <div id="top" class="flex flex-col" :style="{ gap: `${GAP_BETWEEN_SECTIONS}px` }">
    <PublicHeader />
    <div class="bg-tertiary text-white h-[800px]">
      <p>Vidéo + CTA</p>
    </div>
    <div id="game" class="bg-secondary h-[800px]">
      <p>Bullet points</p>
    </div>
    <div id="legions" class="border border-primary h-[800px]">
      <p>Légions</p>
    </div>
    <div class="bg-black text-white h-[200px]">
      <p>Footer</p>
    </div>
  </div>
</template>