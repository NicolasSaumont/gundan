import { defineStore } from 'pinia';
// import { useI18n } from 'vue-i18n';
// const { t } = useI18n();

export const useAppStore = defineStore('app', {
  state: () => ({
    activeMenuButton: 'Accueil',
  }),
});
