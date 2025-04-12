<script setup lang='ts'>
const { loaderIsActive } = storeToRefs(useAppStore())
const { setPacks, setSelectedPack } = useShopStore()
const { packs } = storeToRefs(useShopStore())

const selectedPackDetailsModalIsVisible = ref(false)

const filteredPacks = computed(() => packs.value.filter(pack => pack.name !== PACK_NAME.STARTER))

const handleSelectPackClick = (packId: number) => {
  setSelectedPack(packId)
  selectedPackDetailsModalIsVisible.value = true
}

onMounted(async () => {
  await setPacks()
})
</script>

<template>
  <div class="flex flex-wrap gap-10 justify-center">
    <ShopPacksListPack v-for="pack in filteredPacks" :key="pack.id" :pack="pack" @click="handleSelectPackClick(pack.id)"/>
  </div>
  <FullLoader v-if="loaderIsActive"/>
  <ShopPacksListSelectedPackModal v-model:is-visible="selectedPackDetailsModalIsVisible" />
</template>
