export const useMenu = () => {
  const headerHeight = computed(
    () => document.body.querySelector('header')?.offsetHeight || 0
  );

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Ajustement de la position vers laquelle scroller pour prendre en compte le sticky header
    const targetPosition = element.offsetTop;

    //headerHeight.value =
    //  document.body.querySelector('header')?.offsetHeight || 0;

    const adjustedPosition =
      targetPosition - headerHeight.value - GAP_BETWEEN_SECTIONS;

    // Défilement vers la position ajustée
    window.scrollTo({
      top: adjustedPosition,
      behavior: 'smooth',
    });
  };
  return { scrollTo, headerHeight };
};
