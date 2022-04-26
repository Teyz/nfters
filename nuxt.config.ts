import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    static: {
        prefix: false
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/style/_reset.scss"; @import "@/assets/style/_global.scss";',
                },
            },
        },
    },
    modules: [
        '@nuxtjs/robots',
    ]
})
