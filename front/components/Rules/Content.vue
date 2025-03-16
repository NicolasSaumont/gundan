<script setup lang='ts'>
const { selectedRulesSection } = storeToRefs(useRulesStore())

</script>

<template>
  <div class="border-l border-white">
    <RulesContentIntroduction v-if="selectedRulesSection === RULES_SECTIONS.INTRO"/>
    <RulesContentCards v-if="selectedRulesSection === RULES_SECTIONS.CARDS"/>
    <RulesContentPlay v-if="selectedRulesSection === RULES_SECTIONS.PLAY"/>
    <RulesContentBattleModes v-if="selectedRulesSection === RULES_SECTIONS.BATTLES_MODES"/>
  </div>
</template>
