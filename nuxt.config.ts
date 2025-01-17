import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

import routerOptions from './app/router.options';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'keywords',
          content: '',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: ['@nuxtjs/seo', '@nuxt/eslint', 'vuetify-nuxt-module'],

  ssr: true,

  nitro: {
    preset: 'vercel-static',
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  serverMiddleware: ['redirect-ssl'],

  routeRules: {
    '/': {
      redirect: { to: '/home', statusCode: 301 },
    },
  },

  vuetify: {
    vuetifyOptions: './plugins/vuetify.config.js',
  },

  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
    },
    urls: () => {
      return routerOptions.routes([]).map((route) => route.path);
    },
    excludeAppSources: true,
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
