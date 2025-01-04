<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="flex justify-between items-center bg-primary p-5 sticky top-0 left-0 z-50">
    <a href="/" :title="t('Accueil Gundan')">
      <img 
        src="@/assets/images/logo.jpg" 
        :alt="t('Logo de l\'application Gundan')" 
        class="rounded-xl shadow-lg" 
        width="100px"
      >
    </a>
    <HeaderMenu />
  </header>
</template>