<script setup lang="ts">
const { t } = useI18n()

const { setSelectedRulesSection } = useRulesStore()

onMounted(() => {
  setSelectedRulesSection(RULES_SECTIONS.INTRO)
})

onUnmounted(() => {
  setSelectedRulesSection(null)
})
</script>

<template>
  <div class="flex flex-col items-center justify-center text-white main-container h-full gap-4">
    <h2 class="font-bungee text-lg">{{ t('Règles du jeu') }}</h2>
    <div class="flex border-2 border-white h-[80%] w-full">
      <RulesSectionsList />
      <RulesContent />
    </div>
  </div>
</template>