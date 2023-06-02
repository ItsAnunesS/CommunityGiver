// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | CommunityGiver',
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Bitwo' },
        { name: 'application-name', content: 'Bitwo' },
        { name: 'msapplication-TileColor', content: '#B000E3' },
        { name: 'msapplication-TileImage', content: '/favicon.ico' },
        { name: 'theme-color', content: '#B000E3' },
      ],
    },
    baseURL: '/',
    buildAssetsDir: 'assets',
    rootId: '__bitwo_links',
    rootTag: 'body'
  },
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
