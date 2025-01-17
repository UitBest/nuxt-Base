import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

import { md3 } from 'vuetify/blueprints';

const light = {
  dark: false,
  colors: {
    primary: '#202ab3',
    secondary: '#0089e0',
  },
};

export default defineVuetifyConfiguration(() => ({
  blueprint: md3,
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
}));
