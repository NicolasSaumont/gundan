<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="flex justify-between items-center bg-primary -mt-5 -mx-5 p-5 sticky top-0 left-0">
    <a href="/" :title="t('Accueil Gundan')">
      <img src="~/assets/images/logo.jpg" :alt="t('Logo de l\'application Gundan')" width="100px"
        class="rounded-xl shadow-lg">
    </a>
    <PublicHeaderMenu />
  </header>
</template>