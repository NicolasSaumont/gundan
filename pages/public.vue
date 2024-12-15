<script setup lang="ts">

</script>

<template>
  <div id="top" class="flex flex-col" :style="{ gap: `${GAP_BETWEEN_SECTIONS}px` }">
    <PublicHeader />
    <main>
      <section id="hero" class="bg-tertiary text-white h-[800px]">
        <p>Vidéo + CTA</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque excepturi
          laboriosam necessitatibus quaerat
          error sapiente laborum officia sed suscipit consequuntur corporis, quidem veritatis repellendus est sint eius
          amet! Numquam, maxime?</p>
        <p class="font-caveat">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident harum vitae nulla nisi
          sit ipsum dignissimos,
          ea non quaerat ullam, dolores eligendi, sint laborum libero eaque tempora ex. Ratione, quisquam?</p>
      </section>
      <section id="game" class="bg-secondary h-[800px]">
        <p>Bullet points</p>
      </section>
      <section id="legions" class="border border-primary h-[800px]">
        <p>Légions</p>
      </section>
    </main>
    <footer class="bg-black text-white h-[200px]">
      <p>Footer</p>
    </footer>
  </div>
</template>