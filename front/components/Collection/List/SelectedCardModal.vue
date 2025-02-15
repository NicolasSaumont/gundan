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

const resetSelectedCard = () => {
  selectedCard.value = DEFAULT_CARD as ICard
}
</script>

<template>
  <Modal v-model:is-visible="isVisible" class="flex gap-4" @click="resetSelectedCard">
    <div class="flex justify-center items-center gap-4 max-w-[80%] max-h-[70%] mt-[140px]"> <!-- 140px correspond à la hauteur du header -->
      <!-- <CollectionListSelectedCardModalCard v-if="selectedCard" :card="selectedCard" /> -->
       <Test/>
      <div class="flex flex-col gap-4 text-white p-4 max-w-[50%]">
        <div class="font-bungee text-xl">{{ t(selectedCard?.name) }}</div>
        <div>{{ t(selectedCard?.description) }}</div>
        <div>
          <div>
            <span>{{ t('Rareté : ') }}</span>
            <span>{{ t(selectedCard?.rarity) }}</span>
          </div>
          <div>
            <span>{{ t('Type : ') }}</span>
            <span>{{ t(selectedCard?.type) }}</span>
          </div>
        </div>
        <div>
          <div>
            <span>{{ t('Puissance : ') }}</span>
            <span>{{ t(selectedCard?.evolution.stats.power) }}</span>
          </div>
          <div>
            <span>{{ t('Défense : ') }}</span>
            <span>{{ t(selectedCard?.evolution.stats.defense) }}</span>
          </div>
          <div>
            <span>{{ t('Dégâts : ') }}</span>
            <span>{{ t(selectedCard?.evolution.stats.damage) }}</span>
          </div>
          <div v-if="!isQuickMode">
            <span>{{ t('Santé : ') }}</span>
            <span>{{ t(selectedCard?.evolution.stats.health) }}</span>
          </div>
        </div>
        <div>
          <span>{{ t('Capacité : ') }}</span>
          <span>{{ t(capacity?.description) }}</span>
        </div>
        <div>
          <span>{{ t('Bonus : ') }}</span>
          <span>{{ t(bonus?.description) }}</span>
        </div>
        <div>
          <span>{{ t('Experience : ') }}</span>
          <span v-if="selectedCard.evolution.experienceNeeded">{{ t(selectedCard.experience ? selectedCard.experience : 0) }} / {{ selectedCard.evolution.experienceNeeded }}</span>
          <span v-else>{{ t('MAX') }}</span>
        </div>
      </div>
    </div>
  </Modal>
</template>
