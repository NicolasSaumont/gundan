<script setup lang='ts'>
const { t } = useI18n()
</script>

<template>
  <div class="flex justify-between border-2 border-white w-full gap-4">
    <div class="m-4">Besoin de plus de crédit ?</div>
    <img
      src="@/assets/images/shop-page/greedy-nami.png"
      :alt="t('Nami sous une pluie de billets')"
      class="w-96"
    >
  </div>
</template>
