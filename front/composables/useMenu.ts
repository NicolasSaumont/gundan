export const useMenu = () => {
  const headerHeight = computed(
    () => document.body.querySelector('header')?.offsetHeight || 0
  )

  const router = useRouter()
  const route = useRoute()

  const doScroll = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    // Ajustement de la position vers laquelle scroller pour prendre en compte le sticky header
    const targetPosition = element.offsetTop
    const adjustedPosition =
      targetPosition - headerHeight.value - GAP_BETWEEN_SECTIONS

    // Défilement vers la position ajustée
    window.scrollTo({
      top: adjustedPosition,
      behavior: 'smooth',
    })
  }

  const scrollTo = async (id: string) => {
    if (route.path === '/public') {
      doScroll(id)
    } else {
      await router.push({ path: '/public', query: { scrollTo: id } })
    }
  }

  return {
    doScroll,
    headerHeight,
    scrollTo,
  }
}
