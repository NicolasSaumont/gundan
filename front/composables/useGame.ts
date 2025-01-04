import { useRouter } from 'vue-router'

export const useGame = () => {
  const router = useRouter()

  const handlePlayButtonClick = () => {
    // TODO: simulation de connexion
    router.push('/')
  }
  return { handlePlayButtonClick }
}
