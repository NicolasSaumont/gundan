import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  console.log('store: blabla');

  const isUserLoggedIn = ref(false);

  return {
    isUserLoggedIn,
  };
});
