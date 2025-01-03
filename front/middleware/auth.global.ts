export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.path === '/public') return
  const { isUserLoggedIn } = useAuthStore()
  // TODO: inverser la condition quand l'authentification sera développée
  if (isUserLoggedIn) return navigateTo('/public')
})
