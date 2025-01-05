// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
  ],
  fontawesome: {
    icons: {
      solid: ['palette', 'desktop', 'file-pdf'],
    }
  },
  svgo: {
    autoImportPath: './assets/svg/',
  },
  css: [
    '~/assets/css/main.css',
  ],
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#FFB800',
          },
        },
      },
    }
  },
})