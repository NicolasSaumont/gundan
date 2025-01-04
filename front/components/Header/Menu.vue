
<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const { t } = useI18n()
</script>

<template>
  <nav class="flex items-center gap-6 font-bungee text-lg text-white h-12">
    <template v-for="link in NAVIGATION_LINKS" :key="link.label">
      <NuxtLink :to="link.path" class="link">
        {{ t(link.label) }}
      </NuxtLink>
    </template>
    <NuxtLink to="/user">
      <font-awesome-icon :icon="faUser" size="xl" />
    </NuxtLink>
    <!-- TODO: simulation de déconnexion-->
    <NuxtLink to="/public">
      <font-awesome-icon :icon="faRightFromBracket" size="xl" />
    </NuxtLink>
  </nav>
</template>

<style scoped>
.link {
  @apply tracking-widest px-3 py-2 hover:cursor-pointer hover:text-2xl hover:rotate-[-6deg] transition-all duration-300 ease-in-out;
}
</style>
