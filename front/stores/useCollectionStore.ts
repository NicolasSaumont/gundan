import { defineStore } from 'pinia'

export const useCollectionStore = defineStore('collection', () => {
  const gameMode = ref<GameModeType>(DEFAULT_GAME_MODE)

  const toggleGameMode = () => {
    gameMode.value = gameMode.value === 'quick' ? 'classical' : 'quick'
  }

  return {
    gameMode,
    toggleGameMode
  }
})
