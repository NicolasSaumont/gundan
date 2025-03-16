<script setup lang="ts">
const { t } = useI18n()

const { setSelectedBattleMode } = useBattleModeStore()

onUnmounted(() => {
  setSelectedBattleMode(null)
})
</script>

<template>
  <div class="flex mx-auto justify-between h-full w-[500px]">
    <BattleModesList />
    <img
      :src="`_nuxt/assets/images/battle-modes/goku-frieza-kamehameha.jpg`"
      :alt="t('Goku fights Frieza')"
      class="h-full border-4 border-white"
    >
  </div>
</template>