<script setup lang='ts'>
const { t } = useI18n()

const {
  handleLoginClick,
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
    <Transition name="fade">
      <form v-show="loginForm" class="flex flex-col gap-10 justify-center items-center w-full mr-10 p-6 rounded-2xl shadow-2xl">
        <div class="flex flex-col gap-6 w-full">
    
          <!-- Floating Labels -->
          <div class="relative">
            <input 
              type="text" 
              id="username" 
              :placeholder="t('Nom d\'utilisateur')" 
              class="peer w-full rounded-lg border-b-2 border-gray-300 focus:border-secondary outline-none py-2 px-3 placeholder-transparent transition-all"
            />
            <label 
              for="username" 
              class="absolute left-3 -top-1 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
            >
             {{ t('Nom d\'utilisateur') }}
            </label>
          </div>

          <div class="relative">
            <input 
              type="password" 
              id="password" 
              :placeholder="t('Mot de passe')" 
              class="peer w-full rounded-lg border-b-2 border-gray-300 focus:border-secondary outline-none py-2 px-3 placeholder-transparent transition-all"
            />
            <label for="password" class="absolute left-3 -top-1 text-gray-500 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
              {{ t('Mot de passe') }}
            </label>
          </div>
        </div>
        <div>
          <button
            class="flex gap-2 font-bungee text-lg bg-black text-secondary border-2 rounded-lg px-3 py-2 shadow-xl hover:cursor-pointer hover:bg-primary hover:tracking-wider hover:text-white transition-all duration-300 ease-in-out"
            @click="handleLoginClick">
            <p>{{ t('Je me connecte') }}</p>
          </button>
        </div>
      </form>
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