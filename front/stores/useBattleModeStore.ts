import type { BATTLE_MODE } from "~/utils/constants"

export const useBattleModeStore = defineStore('battle-mode', () => {
  const selectedBattleMode = ref<BATTLE_MODE | null>(null)

  const setSelectedBattleMode = (mode: BATTLE_MODE | null) => {
    selectedBattleMode.value = mode
  }

  return {
    selectedBattleMode,
    setSelectedBattleMode,
  }
})