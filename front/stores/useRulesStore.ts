import type { RULES_SECTIONS } from "~/utils/constants"

export const useRulesStore = defineStore('rules', () => {
  const selectedRulesSection = ref<RULES_SECTIONS | null>(null)

  const setSelectedRulesSection = (mode: RULES_SECTIONS | null) => {
    selectedRulesSection.value = mode
    console.log(selectedRulesSection.value)
  }

  return {
    selectedRulesSection,
    setSelectedRulesSection,
  }
})