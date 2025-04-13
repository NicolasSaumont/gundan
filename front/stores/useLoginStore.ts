export const useLoginStore = defineStore('login', () => {
  const loginForm = ref(true)

  const toggleForm = () => {
    loginForm.value = !loginForm.value
  }

  return { 
    loginForm,
    toggleForm
   }
})