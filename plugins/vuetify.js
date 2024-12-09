// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import { defineNuxtPlugin } from 'nuxt/app';
import { md3 } from 'vuetify/blueprints';

const light = {
    dark: false,
    colors: {
      primary: '#202ab3',
      secondary: '#0089e0',
    },
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    blueprint: md3,
    components,
    directives,
    defaultTheme: 'light',
    theme: {
      themes: {
        light,
      },
    },
    defaults: {
      VSheet: {
        color: 'transparent',
      },
      VTextField: {
        class: 'mb-2',
        variant: 'outlined',
        color: 'primary',
        rules: [(v) => !!v || 'Dit veld is verplicht'],
      },
      VTextarea: {
        class: 'mb-2',
        variant: 'outlined',
        color: 'primary',
        rules: [(v) => !!v || 'Dit veld is verplicht'],
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
})
