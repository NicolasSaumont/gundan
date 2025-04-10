<script setup lang='ts'>
const isVisible = defineModel<boolean>('isVisible', { required: true })

const { selectedPack } = storeToRefs(useShopStore())

const resetSelectedPack = () => {
  selectedPack.value = DEFAULT_PACK as IPack
}
</script>

<template>
  <Modal v-model:is-visible="isVisible" class="flex gap-4" @click="resetSelectedPack">
    <div class="flex flex-col">
     <span>{{ 'Nom : ' + selectedPack.name }}</span>
     <span>{{ 'Description : ' + selectedPack.description }}</span>
     <span>{{ 'Prix : ' + selectedPack.price }}</span>
     <span>{{ 'Nombre de cartes obtenues : ' + selectedPack.cardsCount }}</span>
    </div>
  </Modal>
</template>
