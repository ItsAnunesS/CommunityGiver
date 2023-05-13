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
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    contractAddress: "0xfee9A2e6AAb4d0cDDC6BCd4Ef9cA638856f3d801"
  }
})
