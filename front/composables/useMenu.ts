export const useMenu = () => {
  const headerHeight = computed(
    () => document.body.querySelector('header')?.offsetHeight || 0
  )

  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id)
  //   if (!element) return

  //   // Ajustement de la position vers laquelle scroller pour prendre en compte le sticky header
  //   const targetPosition = element.offsetTop

  //   const adjustedPosition =
  //     targetPosition - headerHeight.value - GAP_BETWEEN_SECTIONS

  //   // Défilement vers la position ajustée
  //   window.scrollTo({
  //     top: adjustedPosition,
  //     behavior: 'smooth',
  //   })
  // }

  const router = useRouter()
  const route = useRoute()

  const doScroll = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const targetPosition = element.offsetTop
    const adjustedPosition =
      targetPosition - headerHeight.value - GAP_BETWEEN_SECTIONS

    window.scrollTo({
      top: adjustedPosition,
      behavior: 'smooth',
    })
  }

  const scrollTo = async (id: string) => {
    if (route.path === '/public') {
      doScroll(id)
    } else {
      await router.push({ path: '/public', hash: id })
      // On attend que le DOM soit mis à jour après navigation
      nextTick(() => {
        // petit délai pour s'assurer que les éléments soient montés
        setTimeout(() => doScroll(id), 100)
      })
    }
  }

  return { scrollTo, headerHeight }
}
