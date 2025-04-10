<script setup lang='ts'>
const isVisible = defineModel<boolean>('isVisible', { required: true })

const { selectedPack } = storeToRefs(useShopStore())

const resetSelectedPack = () => {
  selectedPack.value = DEFAULT_PACK as IPack
}
</script>

<template>
  <Modal v-model:is-visible="isVisible" class="flex gap-4" @click="resetSelectedPack">
  <div>
    Hello World!
  </div>
  </Modal>
</template>
