import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        title: 'NFTERS - NFT Marketplace',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
            { hid: 'description', name: 'description', content: 'Junior Software Engineer at Spendesk. Based in Bordeaux. Available for freelance contracts.' },
            { hid: 'og:title', name: 'og:title', content: 'Bastien Rigaud - Portfolio'},
            { name: "msapplication-TileColor", content: "#da532c" },
            { name: "theme-color", content: "#ffffff" }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
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
