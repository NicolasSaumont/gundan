export const useGame = () => {
  const handlePlayButtonClick = () => {
    // TODO: simulation de connexion
    navigateTo('/login')
  }
  return { handlePlayButtonClick }
}
