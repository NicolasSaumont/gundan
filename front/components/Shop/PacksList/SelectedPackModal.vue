<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'

const isVisible = defineModel<boolean>('isVisible', { required: true })

const { t } = useI18n()
const { selectedPack } = storeToRefs(useShopStore())

const isHovered = ref(false)

const resetSelectedPack = () => {
  selectedPack.value = DEFAULT_PACK as IPack
}
</script>

<template>
  <Modal v-model:is-visible="isVisible" class="flex gap-4" @click="resetSelectedPack">
    <div class="flex flex-col justify-between gap-2 bg-black border-2 border-white rounded-lg p-4 w-[45%] h-[30%]">
     <div class="text-center font-bungee">{{ selectedPack.name }}</div>
     <div>{{ selectedPack.description }}</div>
     <div class="flex gap-4 justify-end">
       <!-- TODO: create button component -->
       <button
          class="flex items-center gap-3 text-white border-2 rounded-full px-3 py-2 shadow-xl hover:cursor-pointer transition-all duration-300 ease-in-out"
          :class="{ 'tracking-wider': isHovered, 'tracking-normal': !isHovered }"
        >
          <span>{{ t('Fermer') }}</span>
        </button>
       <!-- TODO: create button component -->
       <button
          class="flex items-center gap-3 bg-primary text-white border-2 rounded-full px-3 py-2 shadow-xl hover:cursor-pointer hover:bg-black hover:text-secondary hover:border-secondary transition-all duration-300 ease-in-out"
          :class="{ 'tracking-wider': isHovered, 'tracking-normal': !isHovered }"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <font-awesome-icon :icon="faCoins" size="xl" />
          <span>{{ t('Acheter (' + selectedPack.price + ' crédits)') }}</span>
        </button>
     </div>
    </div>
  </Modal>
</template>
