import type { RouterConfig } from '@nuxt/schema'

export default {
    routes: (_routes) => [
        {
            path: '/home',
            name: 'Home',
            component: () => import('~/pages/home.vue'),
        },
    ],
} satisfies RouterConfig