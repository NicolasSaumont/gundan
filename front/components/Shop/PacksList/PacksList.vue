<script setup lang='ts'>
const { loaderIsActive } = storeToRefs(useAppStore())
const { setPacks, setSelectedPack } = useShopStore()
const { packs } = storeToRefs(useShopStore())

const selectedPackDetailsModalIsVisible = ref(false)

const handleSelectPackClick = (packId: number) => {
  setSelectedPack(packId)
  selectedPackDetailsModalIsVisible.value = true
}

onMounted(async () => {
  await setPacks()
})
</script>

<template>
  <div class="flex border-2 border-white w-full">
    <ShopPacksListPack v-for="pack in packs" :key="pack.id" :pack="pack" @click="handleSelectPackClick(pack.id)"/>
  </div>
  <FullLoader v-if="loaderIsActive"/>
</template>
