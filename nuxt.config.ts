// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-GB',
        file: 'en.json'
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'langs/'
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
