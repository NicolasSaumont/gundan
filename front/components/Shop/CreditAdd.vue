<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins'

const { t } = useI18n()

const isHovered = ref(false)
</script>

<template>
  <div class="flex justify-between w-full gap-4">
    <img
      src="@/assets/images/shop-page/greedy-nami.png"
      :alt="t('Nami sous une pluie de billets')"
      class="w-96 border-4 border-white"
    >
    <div class="grow flex flex-col justify-around items-center gap-4">
      <div class="flex flex-col items-center gap-2">
        <div>{{ t('Il te manque quelques crédits pour enfin obtenir le pack de tes rêves ?') }}</div>
        <div>{{ t('Tu trouves que collecter les crédits grâce aux récompenses de combat prend trop de temps ?') }}</div>
        <div>{{ t('Tu en as assez de passer à côté des crédits bonus ?') }}</div>
      </div>
      <!-- TODO: create button component -->
      <button
        class="flex items-center gap-3 bg-primary text-lg text-white border-2 rounded-full px-3 py-2 shadow-xl hover:cursor-pointer hover:bg-black hover:text-secondary hover:border-secondary transition-all duration-300 ease-in-out"
        :class="{ 'tracking-wider': isHovered, 'tracking-normal': !isHovered }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <font-awesome-icon :icon="faCoins" size="xl" />
        <span>{{ t('Obtiens un max de crédit') }}</span>
      </button>
    </div>
  </div>
</template>
