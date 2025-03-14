<script setup lang='ts'>
import type { BATTLE_MODE } from "~/utils/constants"

defineProps<{
  mode: BATTLE_MODE
}>()

const { setSelectedBattleMode } = useBattleModeStore()

const handleSelection = (mode: BATTLE_MODE) => {
  setSelectedBattleMode(mode)
}
</script>

<template>
  <div 
    class="text-center text-lg w-48 bg-white shadow-inner-medium p-4 rounded-lg cursor-pointer hover:text-primary hover:bg-red-200 hover:tracking-wider transition-all duration-300 ease-in-out"
    @click="handleSelection(mode)"
  >
    {{ mode }}
  </div>
</template>
