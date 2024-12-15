// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Gundan',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  imports: {
    dirs: ['./types/**'],
  },
  css: ['@/assets/css/main.css'],
  googleFonts: {
    families: {
      Bungee: [400],
      'Yusei+Magic': [400],
      Caveat: [400, 700],
    },
    display: 'swap', // Option recommandée pour une meilleure performance
  },
});
