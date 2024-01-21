// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/css/colors.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [['@nuxtjs/google-fonts', {
              families:{
                Chonburi:true,
                "DM Serif Display":true,
                "M PLUS Rounded 1c": true
              }
            }],
            '@hypernym/nuxt-gsap',
            '@nuxtjs/color-mode',
            'nuxt-svgo',
            '@nuxtjs/i18n'
  ],
  svgo: {
    svgo: true,
    autoImportPath: './assets/svg',
    defaultImport: 'component'
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  build: {
    transpile: ['nuxt-gsap'],
  }
  
})
