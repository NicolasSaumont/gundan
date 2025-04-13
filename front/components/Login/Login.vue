<script setup lang='ts'>
const { t } = useI18n()

const {
  toggleForm
} = useLoginStore()

const {
  loginForm
} = storeToRefs(useLoginStore())
</script>

<template>
  <div class="grow border-r-4 border-white flex items-center justify-end p-10 transition-all duration-500 ease-in-out">
    <!-- Si loginForm est à true, c'est le formulaire de connexion qui est visible -->
    <!-- Sinon, c'est le formulaire d'inscription -->
    <Transition name="fade">
      <div v-if="!loginForm" class="flex flex-col gap-10">
        <img
          src="/_nuxt/assets/images/login-page/yoichi-hiruma.png"
          :alt="t('Yoichi Hiruma showing his cards')"
          class="border-4 border-white max-w-52"
        >
        <Button :text="t('J\'ai déjà un compte')" @click="toggleForm" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>