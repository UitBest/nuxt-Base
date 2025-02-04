import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

import routerOptions from './app/router.options';

const allRoutes = () => {
  const routes = routerOptions.routes([]).map((route) => route?.path);

  const subRoutes = routerOptions
      .routes([])
      .flatMap((route) => (route.children ? route.children.map((child) => child?.path) : []));

  return [...routes, ...subRoutes];
};

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
      crawlLinks: true,
      routes: [...allRoutes(), '/sitemap.xml'],
      failOnError: false,
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
    urls: allRoutes(),
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
