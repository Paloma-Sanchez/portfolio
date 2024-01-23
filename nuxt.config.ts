// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/css/colors.css', '/assets/css/main.css'],
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
    
    lazy:true,
    langDir: './i18n/locales',
    strategy: "prefix_except_default",
    locales:[
      {
        code:"en",
        name:"English",
        file: "en.json"
      },
      {
        code:"fr",
        name:"Francais",
        file: "fr.json"
      }
    ],
    defaultLocale:"en"

  },
  build: {
    transpile: ['nuxt-gsap'],
  }
  
})
