import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isUserLoggedIn = ref(false);

  return {
    isUserLoggedIn,
  };
});
