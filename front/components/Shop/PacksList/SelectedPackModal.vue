<script setup lang='ts'>
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'

const isVisible = defineModel<boolean>('isVisible', { required: true })

const { t } = useI18n()
const { selectedPack } = storeToRefs(useShopStore())

const buyPackText = computed(() => t('Acheter (' + selectedPack.value.price + ' crédits)'))

const resetSelectedPack = () => {
  selectedPack.value = DEFAULT_PACK as IPack
}

const handleCancelClick = () => {
  resetSelectedPack()
  isVisible.value = false
}
</script>

<template>
  <Modal v-model:is-visible="isVisible" class="flex gap-4" @click="resetSelectedPack">
    <div class="flex flex-col justify-between items-center gap-10 bg-black border-2 border-white rounded-lg p-6" @click.stop>
     <div class="text-center font-bungee">{{ selectedPack.name }}</div>
     <div>{{ selectedPack.description }}</div>
     <div class="flex gap-4">
      <Button :text="t('Annuler')" flat class="!tracking-normal" @click="handleCancelClick" />
      <Button :text="buyPackText" :icon="faCoins" class="!tracking-normal" />
     </div>
    </div>
  </Modal>
</template>
