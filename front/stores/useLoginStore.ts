export const useLoginStore = defineStore('login', () => {
  const loginForm = ref(true)

  const toggleForm = () => {
    loginForm.value = !loginForm.value
  }

  const handleLoginClick = () => {
    console.log('Je veux me connecter')
  }

  return { 
    handleLoginClick,
    loginForm,
    toggleForm,
   }
})