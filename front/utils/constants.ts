import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons/faChalkboardTeacher";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import { faMedal } from "@fortawesome/free-solid-svg-icons/faMedal";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";

//* PUBLIC HOME PAGE //

// GENERAL
export const GAP_BETWEEN_SECTIONS = 96

// Equation linéaire qui permet de calculer HERO_OFFSET :
// - quand GAP_BETWEEN_SECTIONS = 96, le multiplicateur est 2.5.
// - quand GAP_BETWEEN_SECTIONS = 16, le multiplicateur est 4.
export const HERO_OFFSET = GAP_BETWEEN_SECTIONS * (0.01875 * GAP_BETWEEN_SECTIONS + 0.7)

// RASENGAN
export const RASENGAN_SIDE = 25
export const LINE_COUNT = 25

export const MIN_LINE_SIZE_RATIO = 0.02 // Taille minimale pour une ligne
export const MAX_LINE_SIZE_RATIO = 0.2 // Taille maximale pour une ligne
export const LINE_ANIMATION_SPEED_MULTIPLIER = 0.03 // Facteur multiplicateur pour la durée de l'animation
export const LINE_BORDER_RATIO = 0.002 // Ratio entre la taille du Rasengan et l'épaisseur des bordures

// ENSEI HEIDAN
export const MIN_TOP_POSITION = 50 // top: 50%
export const MAX_TOP_POSITION = -20 // top: -20%
export const MAX_TOP_MIN_TOP_DIFFERENCE = MIN_TOP_POSITION - MAX_TOP_POSITION

export const INITIAL_CLOUD_WIDTH = 150
export const INITIAL_CLOUD_HEIGHT = 80
export const MIN_CLOUD_WIDTH = 50
export const MAX_CLOUD_WIDTH = 250
export const MAX_CLOUD_WIDTH_MIN_CLOUD_WIDTH_DIFFERENCE = MAX_CLOUD_WIDTH - MIN_CLOUD_WIDTH

export const CLOUD_ANIMATION_DURATION = 500

export const MIN_TITAN_ANIMATION_DEBOUNCE = 2000
export const MAX_TITAN_ANIMATION_DEBOUNCE = 5000
export const MAX_TITAN_ANIMATION_DEBOUNCE_MMIN_TITAN_ANIMATION_DEBOUNCE_DIFFERENCE = MAX_TITAN_ANIMATION_DEBOUNCE - MIN_TITAN_ANIMATION_DEBOUNCE
export const TITAN_ANIMATION_DURATION = 8000

// LEGIONS
export const LOGO_FILE = '/_nuxt/assets/images/public-home-page/legions-section'
export const FLIP_ANIMATION_DURATION = 600

//* HOME PAGE //

// GENERAL
export const SHOW_DURATION = 50
export const HIDE_DURATION = 200

export const NAVIGATION_LINKS = [
  {
    label: 'Combats',
    path: '/battle-modes',
    image: '/_nuxt/assets/images/home-page-menu/seiya.png'
  },
  {
    label: 'Collection',
    path: '/collection',
    image: '/_nuxt/assets/images/home-page-menu/lucy.png'
  },
  {
    label: 'Missions',
    path: '/missions',
    image: '/_nuxt/assets/images/home-page-menu/snk.png'
  },
  {
    label: 'Boutique',
    path: '/shop',
    image: '/_nuxt/assets/images/home-page-menu/nami.png'
  }
]

//* COLLECTION //

// FILTERS
export const DEFAULT_GAME_MODE = 'quick'

// CARD
export const DEFAULT_CARD = {
  id: 0,
  name: '',
  description: '',
  type: "Attaquant",
  rarity: "Commune",
  experience: 0,
  maxLevel: 0,
  evolution: {
    level: 0,
    experienceNeeded: 0,
    stats: {
      power: 0,
      defense: 0,
      damage: 0,
      health: 0
    },
    image: '',
  },
  legion: {
    name: ''
  },
  skills: {
    bonus: {
      quickMode: {
        name: '',
        code: '',
        description: '',
      },
      classicalMode: {
        name: '',
        code: '',
        description: '',
      }
    },
    capacity: {
      quickMode: {
        name: '',
        code: '',
        description: '',
      },
      classicalMode: {
        name: '',
        code: '',
        description: '',
      }
    }
  },
}

const CARD_MODEL_WIDTH = 350
const CARD_MODEL_HEIGHT = 463
const CARD_MODEL_RATIO = CARD_MODEL_HEIGHT / CARD_MODEL_WIDTH

export const COLLECTION_CARD_WIDTH = 225
export const SELECTED_CARD_WIDTH = 350
export const COLLECTION_CARD_HEIGHT = COLLECTION_CARD_WIDTH * CARD_MODEL_RATIO
export const SELECTED_CARD_HEIGHT = SELECTED_CARD_WIDTH * CARD_MODEL_RATIO

export const HEARTS_BY_COLUMN = 10

export const CARD_WIDTH_NAME_RATIO = 0.08
export const CARD_WIDTH_SKILL_RATIO = 0.07
export const CARD_WIDTH_STATS_RATIO = 0.08
export const CARD_WIDTH_HEARTS_RATIO = 0.057
export const CARD_WIDTH_STARS_EXPERIENCE_RATIO = 0.057
export const CARD_WIDTH_TYPE_ICON_RATIO = 0.055

export const MIN_EXPERIENCE_VISIBLE = 4

export const ROTATION_SENSIBILITY = 20

//* BATTLE MODES //

export enum BATTLE_MODE {
  TUTO = "Tuto",
  TRAINING = "Entrainement",
  CLASSICAL_PVP = "PvP Classique",
  QUICK_PVP = "PvP Rapide",
  CAREER = "Carrière",
  SOLO = "Solo rapide",
}

export const modeIcons: Record<BATTLE_MODE, IconDefinition> = {
  [BATTLE_MODE.TUTO]: faChalkboardTeacher,
  [BATTLE_MODE.TRAINING]: faDumbbell,
  [BATTLE_MODE.CLASSICAL_PVP]: faUsers,
  [BATTLE_MODE.QUICK_PVP]: faBolt,
  [BATTLE_MODE.CAREER]: faMedal,
  [BATTLE_MODE.SOLO]: faRobot
}

//* RULES //

export enum RULES_SECTIONS {
  INTRO = "Introduction",
  CARDS = "Cartes",
  PLAY = "Comment jouer ?",
  SENZU = "Senzu",
  BATTLES_MODES = "Modes de jeu",
}

//* SHOP //
export const DEFAULT_PACK = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  cardsCount: 1,
  image: '',
}

export enum PACK_NAME {
  STARTER = 'Starter',
  GENIN = 'Genin',
  RONIN = 'Ronin',
  SENSEI = 'Sensei',
  SHOGUN = 'Shogun'
}