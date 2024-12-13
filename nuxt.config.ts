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
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  imports: {
    dirs: ['./types/**'],
  },
});
