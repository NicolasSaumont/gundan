<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const isVisible = defineModel<boolean>('isVisible', { required: true })

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    isVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener("keydown", closeOnEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", closeOnEscape);
});
</script>

<template>
  <div v-if="isVisible" class="absolute inset-0 flex justify-center items-center w-full h-full overflow-hidden bg-black/95" @click="isVisible = false">
    <font-awesome-icon
      :icon="faXmark"
      size="2xl"
      class="absolute top-40 right-10 text-white cursor-pointer"
    />
    <slot />
  </div>
</template>
