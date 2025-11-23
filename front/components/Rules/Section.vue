<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { RULES_SECTIONS } from '~/utils/constants'

defineProps<{
  section: RULES_SECTIONS
}>()

const { t } = useI18n()

const { setSelectedRulesSection } = useRulesStore()
const { selectedRulesSection } = storeToRefs(useRulesStore())
const isHovered = ref(false)

const handleSelection = (section: RULES_SECTIONS) => {
  if (section === RULES_SECTIONS.BACK) {
    navigateTo('/battle-modes')
  } else {
    setSelectedRulesSection(section)
  }
}
</script>

<template>
  <div 
    class="p-4 relative w-full cursor-pointer overflow-hidden group"
    @click="handleSelection(section)"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Fond animé -->
    <div 
      class="absolute inset-0 bg-primary border-2 border-x-0 border-white origin-right scale-x-0 transition-transform duration-300 ease-in-out " 
      :class="{ 
        'border-t-0': section === RULES_SECTIONS.INTRO,
        'scale-x-100': isHovered || selectedRulesSection === section
      }"
    />

    <!-- Texte au-dessus -->
    <div 
      class="flex gap-4 items-center relative z-10 transition-all duration-300 ease-in-out"
      :class="{ 
        'tracking-widest': isHovered || selectedRulesSection === section, 
        'tracking-normal': !isHovered,
        'justify-end': section === RULES_SECTIONS.BACK 
      }"
    >
      <font-awesome-icon v-if="section === RULES_SECTIONS.BACK" :icon="faArrowLeft" size="lg" />
      <span>{{ t(section) }}</span>
    </div>
  </div>
</template>