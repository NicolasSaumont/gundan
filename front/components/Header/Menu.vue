
<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'

const { t } = useI18n()
</script>

<template>
  <nav class="flex items-center gap-6 font-bungee text-lg text-white h-12">
    <NuxtLink to="/" class="link">
      {{ t('Accueil') }}
    </NuxtLink>
    <template v-for="link in NAVIGATION_LINKS" :key="link.label">
      <NuxtLink :to="link.path" class="link">
        {{ t(link.label) }}
      </NuxtLink>
    </template>
    <NuxtLink to="/user" :title="t('Utilisateur')" class="icon-link">
      <font-awesome-icon :icon="faUser" size="xl" />
    </NuxtLink>
    <!-- TODO: simulation de déconnexion-->
    <NuxtLink to="/public" :title="t('Déconnexion')" class="icon-link">
      <font-awesome-icon :icon="faRightFromBracket" size="xl" />
    </NuxtLink>
  </nav>
</template>

<style scoped>
.link {
  @apply tracking-widest px-3 py-2 hover:cursor-pointer hover:text-2xl hover:rotate-[-6deg] transition-all duration-300 ease-in-out;
}

.icon-link {
  @apply hover:text-secondary hover:text-2xl transition-all duration-300 ease-in-out
}
</style>
