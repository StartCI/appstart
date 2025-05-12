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
  modules: ['@nuxt/icon', '@nuxt/test-utils', '@nuxt-alt/proxy'],
  app: {
    cdnURL: '/nuxt/dist'
  },
  proxy: {
    debug: true,
    proxies: {
      '/api': 'http://localhost'
    }
  }
})