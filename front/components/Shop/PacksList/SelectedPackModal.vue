<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons/faGem'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'

const isVisible = defineModel<boolean>('isVisible', { required: true })

const { t } = useI18n()
const { selectedPack } = storeToRefs(useShopStore())

const packCount = ref(1)
const totalPrice = computed(() => selectedPack.value.price * packCount.value )

const incrementPackCount = () => {
  packCount.value ++
}

const decrementPackCount = () => {
  if (packCount.value === 1) return
  packCount.value --
}

const resetSelectedPack = () => {
  packCount.value = 1
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
     <div class="flex gap-2 items-center border-2 border-secondary rounded-xl">
      <font-awesome-icon :icon="faMinus" class="border-r-2 border-secondary p-2 cursor-pointer text-secondary" @click="decrementPackCount" />
      <div class="px-4">{{ packCount }}</div>
      <font-awesome-icon :icon="faPlus" class="border-l-2 border-secondary p-2 cursor-pointer text-secondary" @click="incrementPackCount" />
     </div>
     <div class="flex items-center gap-2">
       <div>{{ t('Coût total :') }}</div>
       <div>{{ totalPrice }}</div>
       <font-awesome-icon :icon="faGem" size="lg" />
     </div>
     <div class="flex gap-4">
      <Button :text="t('Annuler')" flat class="!tracking-normal" @click="handleCancelClick" />
      <Button :text="t('Acheter')" :icon="faCoins" class="!tracking-normal" />
     </div>
    </div>
  </Modal>
</template>
