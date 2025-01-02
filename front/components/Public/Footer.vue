<script setup lang='ts'>
const { t } = useI18n()
</script>

<template>
  <footer class="main-container flex gap-10 text-white text-center mb-5">
    <p>{{ t('© Nicolas Saumont, 2025') }}</p>
    <NuxtLink to="https://www.nicolassaumont.com" class="hover:underline">{{ t('Découvrez mon site personnel') }}</NuxtLink>
    <NuxtLink to="https://portfolio.nicolassaumont.com/" class="hover:underline">{{ t('Explorez mes projets') }}</NuxtLink>
    <NuxtLink to="https://github.com/NicolasSaumont" class="hover:underline">{{ t('Accédez à ma page Github') }}</NuxtLink>
    <NuxtLink to="https://fr.linkedin.com/in/nicolas-saumont" class="hover:underline">{{ t('Consultez mon profil LinkedIn') }}</NuxtLink>
  </footer>
</template>
