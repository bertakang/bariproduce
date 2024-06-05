// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  base : 'bariproduce',
  devtools: { enabled: true },

  router: {
    routes: [
      {
        name: 'Fruit',
        path: '/Fruits/:fruit', 
        component: '~/pages/product/Grape/[grape].vue',
      },
      {
        name: 'Grape',
        path: '/Grape/:grape', 
        component: '~/pages/product/Grape/[grape].vue',
      },
      {
        name: 'Recipe',
        path: '/Recipe/:recipe', 
        component: '~/pages/Recipe/[recipe].vue',
      },
    ],
  },

  site: {
    url: 'https://bariproduce.vercel.app/',
    name: 'BARI Produce | High-Quality California Tree Fruit & Grapes',
    description: 'Freshest California tree fruit and table grapes delivered straight to your door. Explore our farm-fresh varieties and discover delicious recipes!',
    defaultLocale: 'en',
    indexable: false,
  },

  modules: ["@nuxtjs/seo"],
  
})