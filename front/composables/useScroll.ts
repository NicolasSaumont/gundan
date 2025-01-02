export const useScroll = (sectionRef: Ref<HTMLElement | null>) => {
  const scrollProgress = ref(0);

  const handleScroll = () => {
    if (!sectionRef.value) return;

    // Récupère les dimensions et la position de la section par rapport à la fenêtre.
    const rect = sectionRef.value.getBoundingClientRect();

    // Hauteur visible de la fenêtre (la partie visible de l'écran).
    const windowHeight = window.innerHeight;

    // Calculer une valeur de progression basée sur le défilement de la section dans la fenêtre :
    // Détails du calcul :
    // - `(windowHeight - rect.top)` mesure combien de pixels de la section sont "entrés" dans la fenêtre.
    // - Divisé par `(windowHeight + rect.height)` pour normaliser la progression entre 0 (pas visible) et 1 (complètement visible).
    // - `Math.max` garantit que la valeur ne descend pas sous 0.
    // - `Math.min` limite la valeur à un maximum de 0.3.
    const progress =
      Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 0.3);

    // Augmente la vitesse de déplacement des blocs grâce au multiplicateur
    scrollProgress.value = progress * (3 + 1/3); 
  };

  onMounted(async () => {
    window.addEventListener("scroll", handleScroll);
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { handleScroll, scrollProgress };
};
