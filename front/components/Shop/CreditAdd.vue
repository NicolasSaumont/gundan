<script setup lang='ts'>
import { faGem } from '@fortawesome/free-solid-svg-icons/faGem'

const { t } = useI18n()

const GET_MORE_CREDITS_TEXT = t('Obtiens un max de gemmes')
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
        <div>{{ t('Il te manque quelques gemmes pour enfin obtenir le pack de tes rêves ?') }}</div>
        <div>{{ t('Tu trouves que collecter les gemmes grâce aux récompenses de combat prend trop de temps ?') }}</div>
        <div>{{ t('Tu en as assez de passer à côté des gemmes bonus ?') }}</div>
      </div>

      <Button :text="GET_MORE_CREDITS_TEXT" :icon="faGem" />
    </div>
  </div>
</template>
