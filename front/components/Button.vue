<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  text: string
  flat?: boolean
  icon?: IconDefinition
}>()

const BASE_BUTTON_STYLE = "flex items-center gap-3 text-white border-2 rounded-full px-3 py-2 shadow-xl tracking-normal hover:tracking-wider hover:cursor-pointer hover:text-secondary hover:border-secondary transition-all duration-300 ease-in-out"
const PRIMARY_BUTTON_STYLE = "bg-primary hover:bg-black"
</script>

<template>
  <button
    :class="[BASE_BUTTON_STYLE, !flat && PRIMARY_BUTTON_STYLE]"
  >
    <font-awesome-icon v-if="icon" :icon="icon" size="lg" />
    <span>{{ text }}</span>
  </button>
</template>
