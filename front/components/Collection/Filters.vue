<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
import { faChess } from '@fortawesome/free-solid-svg-icons/faChess'

const quickModeIsSelected = defineModel<boolean>('quickModeIsSelected', { required: true })

const { t } = useI18n()

const toggleGameMode = () => {
  quickModeIsSelected.value = !quickModeIsSelected.value
}
</script>

<template>
  <div class="h-[100px] bg-green-200">
    Zone de Filtres
    <div class="flex justify-center mt-6">
      <button
        class="relative w-28 h-10 bg-gray-300 rounded-full p-1 flex items-center transition-all duration-300"
        :class="{ 'bg-blue-500': quickModeIsSelected }"
        @click="toggleGameMode"
      >
        <div
          class="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300"
          :class="{ 'translate-x-[72px]': quickModeIsSelected }"
        >
          <font-awesome-icon 
            :icon="faBolt" 
            size="lg" 
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300" 
            :class="{ 'opacity-0': !quickModeIsSelected }"
          />
          <font-awesome-icon 
            :icon="faChess" 
            size="lg" 
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300" 
            :class="{ 'opacity-0': quickModeIsSelected }"
          />
        </div>
        <span
          class="absolute right-2 text-gray-500 text-sm transition-opacity duration-300"
          :class="{ 'opacity-0': quickModeIsSelected }"
        >
          {{ t("Classical") }}
        </span>
        <span
          class="absolute left-2 text-white text-sm transition-opacity duration-300"
          :class="{ 'opacity-0': !quickModeIsSelected }"
        >
          {{ t("Quick") }}
        </span>
      </button>
    </div>
  </div>
</template>
