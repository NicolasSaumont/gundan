<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const isVisible = defineModel<boolean>('isVisible', { required: true })

</script>

<template>
  <div v-if="isVisible" class="absolute inset-0 flex justify-center items-center w-full h-full overflow-hidden bg-black/80">
    <font-awesome-icon
      :icon="faXmark"
      size="2xl"
      class="absolute top-40 right-10 text-white cursor-pointer"
      @click="isVisible = false"
    />
    <slot />
  </div>
</template>
