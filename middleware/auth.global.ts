export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.path === '/public') return;
  const { isUserLoggedIn } = useAuthStore();
  if (!isUserLoggedIn) return navigateTo('/public');
});
