// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    routes: [
      {
        name: 'Fruit',
        path: '/Fruits/:fruit', 
        component: '~/pages/product/Fruits/[fruit].vue',
      },
    ],
  },
})
