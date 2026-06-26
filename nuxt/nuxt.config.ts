// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite:{
    server: {
      allowedHosts: [process.env?.DDEV_HOSTNAME??'*']
    }
  },
  router: {
    options: {
      hashMode: true
    }
  },
  routeRules: {
    '/api/**': {
      proxy: 'http://localhost/api/**'
    }
  },
  modules: ['@nuxt/icon', '@nuxt/test-utils'],
  app: {
    cdnURL: '/nuxt/dist'
  }
})