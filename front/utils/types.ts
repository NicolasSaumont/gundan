// PUBLIC HOME PAGE
export interface IGameSectionCardDetails {
  id: number
  sourceImage: string
  title: string
  content: string
  effect: "gearFifth" | "rasengan" | "enseiHeidan"
  background: string
}

export type IGameSectionCards = IGameSectionCardDetails[]

export interface ILegion {
  id: number
  name: string
  image: string
  logo: string
  description: string
  tagLine: string
}

export type ILegions = ILegion[]

// COLLECTION
export type GameModeType = "quick" | "classical"

export type CardType = "Attaquant" | "Défenseur" | "Soutien" | "Stratège"

export type CardRarity = "Commune" | "Inhabituelle" | "Rare" | "Légendaire"

export const rarityImages: Record<CardRarity, string> = {
  "Commune": "common.png",
  "Inhabituelle": "unusual.png",
  "Rare": "rare.png",
  "Légendaire": "legendary.png"
}

export interface IEvolution {
  level: number
  experienceNeeded: number | null // null if max level reached
  stats: {
    power: number
    defense: number
    damage: number
    health: number
  }
  image: string
}

export interface ICapacity {
  name: string
  code: string
  description: string
}

export interface ISkills {
  bonus: ICapacity
  capacity: {
    quickMode: ICapacity
    classicalMode: ICapacity
  }
}

export interface ICard {
  id: number
  name: string
  description: string
  type: CardType
  rarity: CardRarity
  experience: number | null // null if full experience
  maxLevel: number
  evolution: IEvolution
  legion: Partial<ILegion>
  skills: ISkills
}

export type ICards = ICard[]
