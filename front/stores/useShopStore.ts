import { defineStore } from 'pinia'

// TODO: once API linked, initiate 'packs' at null
const packs = ref<IPacks>([
  {
    id: 1,
    name: 'Starte',
    description: '8 cartes, parmi 2 légions au choix',
    price: 0,
    cardsCount: 8,
    image: 'starter-pack.png'
  },
  {
    id: 2,
    name: 'Genin',
    description: '1 carte, parmi toutes les légions',
    price: 6,
    cardsCount: 1,
    image: 'genin-pack.png'
  },
  {
    id: 3,
    name: 'Ronin',
    description: '5 cartes, parmi toutes les légions.',
    price: 29,
    cardsCount: 5,
    image: 'ronin-pack.png'
  },
  {
    id: 4,
    name: 'Sensei',
    description: '15 cartes, parmi 4 légions au choix',
    price: 89,
    cardsCount: 15,
    image: 'sensei-pack.png'
  },
  {
    id: 5,
    name: 'Shogun',
    description: '50 cartes, parmi 4 légions au choix',
    price: 259,
    cardsCount: 50,
    image: 'shogun-pack.png'
  }
])

const selectedPack = ref<IPack>(DEFAULT_PACK as IPack)

export const useShopStore = defineStore('shop', () => {
  const setPacks = async () => {
    // TODO: create loader
    console.log('loader active')
    try {
      // TODO: get call API
      console.log('API is called to get packs list')
      // await getPacks()
      // packs.value = data
    } catch (error) {
      // TODO: errors management
    } finally {
      console.log('loader inactive')
    }
  }

  const setSelectedPack = (id: number) => {
    selectedPack.value = packs.value.find(pack => pack.id === id) ?? DEFAULT_PACK as IPack
  }

  return {
    packs,
    selectedPack,
    setPacks,
    setSelectedPack
  }
})
