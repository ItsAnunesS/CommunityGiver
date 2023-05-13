// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/i18n'],
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
  }
})
