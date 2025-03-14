<script setup lang="ts">
import type { BATTLE_MODE } from "~/utils/constants"

const { setSelectedBattleMode } = useBattleModeStore()

onUnmounted(() => {
  setSelectedBattleMode(null)
})
</script>

<template>
  <div class="flex justify-center items-center h-full">
    <div class="flex flex-wrap gap-4 justify-between max-w-[450px]">
      <template
        v-for="mode in Object.values(BATTLE_MODE)"
        :key="mode"
      >
        <BattleModeSelector :mode/>
      </template>
    </div>
  </div>
</template>