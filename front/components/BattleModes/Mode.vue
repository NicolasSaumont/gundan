<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons/faChalkboardTeacher";
import type { BATTLE_MODE } from "~/utils/constants"

defineProps<{
  mode: BATTLE_MODE
}>()

const { t } = useI18n()

const { setSelectedBattleMode } = useBattleModeStore()
const isHovered = ref(false)

const handleSelection = (mode: BATTLE_MODE) => {
  setSelectedBattleMode(mode)
}
</script>

<template>
  <div 
    class="relative text-white text-center text-lg w-full p-4 cursor-pointer overflow-hidden group"
    @click="handleSelection(mode)"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Fond animé -->
    <div class="absolute inset-0 bg-primary border-2 border-r-0 border-white origin-right scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />

    <!-- Texte au-dessus -->
    <div 
      class="flex gap-4 items-center relative z-10 transition-all duration-300 ease-in-out"
      :class="{ 'tracking-widest': isHovered, 'tracking-normal': !isHovered }"
    >
      <font-awesome-icon
        :icon="modeIcons[mode]"
      />
      <span>{{ t(mode) }}</span>
    </div>
  </div>
</template>