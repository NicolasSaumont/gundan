<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faChess } from '@fortawesome/free-solid-svg-icons/faChess'

const gameMode = defineModel<GameModeType>('gameMode', { required: true })

const { t } = useI18n()

const toggleGameMode = () => {
  gameMode.value = gameMode.value === 'quick' ? 'classical' : 'quick'
}
</script>

<template>
  <div class="bg-white shadow-inner-medium border-2 border-primary rounded-md p-4">
    <button
      class="text-white relative w-40 h-10 bg-primary shadow-inner-strong rounded-full p-1 flex items-center transition-all duration-300"
      :class="{ 'bg-tertiary': gameMode === 'quick' }"
      @click="toggleGameMode"
    >
      <div
        class="flex items-center justify-center w-8 h-8 bg-white shadow-inner-medium rounded-full transform transition-transform duration-300"
        :class="{ 'translate-x-[120px]': gameMode === 'quick' }"
      >
        <font-awesome-icon 
          :icon="faBolt" 
          size="lg" 
          class="text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300" 
          :class="{ 'opacity-0': gameMode === 'classical' }"
        />
        <font-awesome-icon 
          :icon="faChess" 
          size="lg" 
          class="text-tertiary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300" 
          :class="{ 'opacity-0': gameMode === 'quick' }"
        />
      </div>
      <span
        class="text-sm absolute right-4 transition-opacity duration-300"
        :class="{ 'opacity-0': gameMode === 'quick' }"
      >
        {{ t("Mode classique") }}
      </span>
      <span
        class="text-sm absolute left-4 transition-opacity duration-300"
        :class="{ 'opacity-0': gameMode === 'classical' }"
      >
        {{ t("Mode rapide") }}
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