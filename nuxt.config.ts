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
})
