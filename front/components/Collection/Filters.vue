<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faChess } from '@fortawesome/free-solid-svg-icons/faChess'

const gameMode = defineModel<GameModeType>('gameMode', { required: true })

const { t } = useI18n()

const icons = [
  { mode: "quick", icon: faBolt, color: "text-secondary" },
  { mode: "classical", icon: faChess, color: "text-tertiary" },
]

const modes = [
  { value: "classical", label: "Mode classique", position: "right-4" },
  { value: "quick", label: "Mode rapide", position: "left-4" },
]

const toggleGameMode = () => {
  gameMode.value = gameMode.value === 'quick' ? 'classical' : 'quick'
}
</script>

<template>
  <div class="bg-white shadow-inner-medium border-2 border-primary rounded-md p-4">
    <button
      class="relative flex items-center w-40 h-10 bg-primary shadow-inner-strong rounded-full text-white p-1 transition-all duration-300"
      :class="{ 'bg-tertiary': gameMode === 'quick' }"
      @click="toggleGameMode"
    >
      <div
        class="flex items-center justify-center w-8 h-8 bg-white shadow-inner-medium rounded-full transform transition-transform duration-300"
        :class="{ 'translate-x-[120px]': gameMode === 'quick' }"
      >
        <font-awesome-icon
          v-for="icon in icons"
          :key="icon.mode"
          :icon="icon.icon"
          size="lg"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          :class="[icon.color, { 'opacity-0': gameMode !== icon.mode }]"
        />
      </div>
      <span
        v-for="mode in modes"
        :key="mode.value"
        class="text-sm absolute transition-opacity duration-300"
        :class="[mode.position, { 'opacity-0': gameMode !== mode.value }]"
      >
        {{ t(mode.label) }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.shadow-inner-medium {
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.3);
}

.shadow-inner-strong {
  box-shadow: inset 0 6px 12px rgba(0, 0, 0, 0.4);
}
</style>