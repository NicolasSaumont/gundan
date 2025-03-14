import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const loaderIsActive = ref(false)

  return {
    loaderIsActive,
  }
})