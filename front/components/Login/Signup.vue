<script setup lang='ts'>
const {
  toggleForm
} = useLoginStore()

const {
  loginForm
} = storeToRefs(useLoginStore())
</script>

<template>
  <div 
    class="transition-all duration-500 ease-in-out"
    :class="loginForm ? 'w-[33.33%]' : 'w-[66.66%]'"
  >
    <Button text="Je n'ai pas de compte" @click="toggleForm"></Button>
  </div>
</template>
