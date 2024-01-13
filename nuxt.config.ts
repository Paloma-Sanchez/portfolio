// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [['@nuxtjs/google-fonts', {
              families:{
                Chonburi:true,
                "DM Serif Display":true
              }
            }],
            '@hypernym/nuxt-gsap'
  ],
  build: {
    transpile: ['nuxt-gsap'],
  }
  
})
