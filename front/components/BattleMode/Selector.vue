<script setup lang='ts'>
import type { BATTLE_MODE } from "~/utils/constants"

defineProps<{
  mode: BATTLE_MODE
}>()

const { t } = useI18n()

const { setSelectedBattleMode } = useBattleModeStore()

const handleSelection = (mode: BATTLE_MODE) => {
  setSelectedBattleMode(mode)
}
</script>

<template>
  <div 
    class="text-white text-center text-lg w-48 bg-primary border-2 border-white p-4 rounded-lg cursor-pointer hover:text-xl hover:text-secondary hover:bg-transparent hover:border-secondary hover:tracking-wider transition-all duration-300 ease-in-out"
    @click="handleSelection(mode)"
  >
    {{ t(mode) }}
  </div>
</template>
