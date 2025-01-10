import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isUserLoggedIn = ref(false)

  return {
    isUserLoggedIn,
  }
})
