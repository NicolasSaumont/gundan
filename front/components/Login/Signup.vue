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
  <div 
    class="flex items-center p-10 transition-all duration-500 ease-in-out"
    :class="loginForm ? 'w-[33.33%]' : 'w-[66.66%]'"
  >
    <!-- Si loginForm est à true, c'est le formulaire de connexion qui est visible -->
    <!-- Sinon, c'est le formulaire d'inscription -->
    <Transition name="fade">
      <div v-if="loginForm" class="flex flex-col gap-10">
        <img
          src="/_nuxt/assets/images/login-page/shikamaru-thinking.jpg"
          :alt="t('Shikamaru thinking')"
          class="border-4 border-white max-w-52"
        >
        <Button :text="t('Je n\'ai pas de compte')" @click="toggleForm" />
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