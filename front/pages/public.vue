<script setup lang="ts">
definePageMeta({
  layout: 'public',
})

const { doScroll } = useMenu()

onMounted(() => {
  const route = useRoute()
  const scrollToId = route.query.scrollTo as string
  if (scrollToId) {
    setTimeout(() => doScroll(scrollToId), 100)
  }
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

