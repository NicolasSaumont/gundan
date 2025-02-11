<script setup lang='ts'>
const isVisible = defineModel<boolean>('isVisible', { required: true })

const { t } = useI18n()
const { selectedCard } = storeToRefs(useCardStore())
const { gameMode } = storeToRefs(useCollectionStore())

const isQuickMode = computed(() => gameMode.value === "quick");

const capacity = computed(() => 
  isQuickMode.value ? selectedCard.value?.skills.capacity.quickMode : selectedCard.value?.skills.capacity.classicalMode
)

const bonus = computed(() => 
  isQuickMode.value ? selectedCard.value?.skills.bonus.quickMode : selectedCard.value?.skills.bonus.classicalMode
)
</script>

<template>
  <Modal v-model:is-visible="isVisible" class="flex gap-4">
    <div class="flex justify-center gap-4 max-w-[80%] max-h-[70%] mt-[140px]"> <!-- 140px correspond à la hauteur du header -->
      <CollectionListSelectedCardModalCard v-if="selectedCard" :card="selectedCard" />
      <div class="flex flex-col gap-4 text-white p-4 max-w-[50%]">
        <div class="font-bungee text-xl">{{ t(selectedCard?.name ?? '') }}</div>
        <div>{{ t(selectedCard?.description ?? '') }}</div>
        <div>
          <span>{{ t('Type : ') }}</span>
          <span>{{ t(selectedCard?.type ?? '-') }}</span>
        </div>
        <div class="flex flex-col">
          <div>
            <span>{{ t('Puissance : ') }}</span>
            <span>{{ t(selectedCard?.evolution.stats.power ?? '-') }}</span>
          </div>
          <div>
            <span>{{ t('Défense : ') }}</span>
            <span>{{ t(selectedCard?.evolution.stats.defense ?? '-') }}</span>
          </div>
          <div>
            <span>{{ t('Dégâts : ') }}</span>
            <span>{{ t(selectedCard?.evolution.stats.damage ?? '-') }}</span>
          </div>
          <div>
            <span>{{ t('Santé : ') }}</span>
            <span>{{ t(selectedCard?.evolution.stats.health ?? '-') }}</span>
          </div>
        </div>
        <div>
          <span>{{ t('Capacité : ') }}</span>
          <span>{{ t(capacity?.description ?? '-') }}</span>
        </div>
        <div>
          <span>{{ t('Bonus : ') }}</span>
          <span>{{ t(bonus?.description ?? '-') }}</span>
        </div>
      </div>
    </div>
  </Modal>
</template>
