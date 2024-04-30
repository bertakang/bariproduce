// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    routes: [
      {
        path: '/Fruits/:fruit', 
        component: '~/views/Fruits/_fruit.vue',
      },
    ],
  },
})
