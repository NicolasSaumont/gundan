<script setup lang='ts'>
const { selectedRulesSection } = storeToRefs(useRulesStore())

</script>

<template>
  <div class="w-[66%] border-l border-white p-4">
    <RulesContentIntroduction v-if="selectedRulesSection === RULES_SECTIONS.INTRO"/>
    <RulesContentCards v-if="selectedRulesSection === RULES_SECTIONS.CARDS"/>
    <RulesContentPlay v-if="selectedRulesSection === RULES_SECTIONS.PLAY"/>
    <RulesContentSenzu v-if="selectedRulesSection === RULES_SECTIONS.SENZU"/>
    <RulesContentBattleModes v-if="selectedRulesSection === RULES_SECTIONS.BATTLES_MODES"/>
  </div>
</template>
