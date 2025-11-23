// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Gundan',
    },
  },

  router: {
    scrollBehavior() {
      // on gère nous-même le scroll, donc on empêche tout comportement auto
      return false
    }
  },

  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],

  imports: {
    dirs: ['./types/**'],
  },

  spaLoadingTemplate: 'loading-page.html',
  css: ['@/assets/css/main.css'],

  googleFonts: {
    families: {
      Bungee: [400],
      'Yusei+Magic': [400],
      Caveat: [400, 700],
    },
    display: 'swap', // Option recommandée pour une meilleure performance
  },

  compatibilityDate: '2025-02-15',
});