export default defineNuxtRouteMiddleware((to, from) => {
  const appStore = useAppStore();
  appStore.activeMenuButton = to.path;
});
