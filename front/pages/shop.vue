<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center text-white main-container h-full gap-10">
    <h2 class="font-bungee text-lg">{{ t('La boutique') }}</h2>
    <ShopPacksList />
    <ShopCreditAdd />
  </div>
</template>