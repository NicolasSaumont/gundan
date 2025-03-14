<script setup lang="ts">
import type { BATTLE_MODE } from "~/utils/constants"

const { setSelectedBattleMode } = useBattleModeStore()

const handleSelection = (mode: BATTLE_MODE) => {
  setSelectedBattleMode(mode)
}

onUnmounted(() => {
  setSelectedBattleMode(null)
})
</script>

<template>
  <div class="text-white">
    <div 
      v-for="mode in Object.values(BATTLE_MODE)" 
      :key="mode"
      @click="handleSelection(mode)"
    >
      {{ mode }}
    </div>
  </div>
</template>