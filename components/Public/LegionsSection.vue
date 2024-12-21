<script setup lang='ts'>
const { setLegions, legions } = useLegionsStore()
const { t } = useI18n()

const sliderIndex = ref(3)

onMounted(async () => {
  await setLegions()
})
</script>

<template>
  <section id="legions" class="h-[700px] bg-primary -mx-5">
    <div class="main-container slider flex gap-4 px-10 py-10 h-full">
      <div class="w-1/2 p-4 flex flex-col justify-around">
        <h2 class="font-caveat text-5xl text-secondary">{{ t('Créez la plus puissante des alliances') }}</h2>
        <p>{{ t('Dans GUNDAN, les joueurs peuvent combiner plusieurs légions issues des mangas les plus cultes. Chaque légion apporte ses héros uniques, avec des pouvoirs et des synergies spéciales, permettant de créer une stratégie sur-mesure. Les bonus de légion activent des effets puissants selon les personnages choisis, et leur interaction crée des dynamiques de jeu inédites. Choisissez judicieusement vos légions, exploitez leurs forces et menez vos héros à la victoire dans ce jeu de cartes où stratégie et alliances sont la clé du succès !') }}</p>
      </div>
      <template v-for="legion in legions" :key="legion.id">
        <PublicLegionsSectionLegion v-show="sliderIndex === legion.id" :legion="legion" />
      </template>
    </div>
  </section>
</template>
