import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
        '@nuxtjs/robots'
    ],
    app: {    
        head: {
            meta: [
                { name: 'title', content: 'NFTERS - Discover, and collect Digital Art NFTs' },
                { name: 'description', content: 'NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT.' },
                { hid: 'og:title', name: 'og:title', content: 'NFTERS - Discover, and collect Digital Art NFTs'},
                { property: 'og:description', content: 'NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT.'},
                { property: 'og:image', content: 'https://nfters-marketplace.netlify.app/static/nfters.png' },
                { hid: 'og:url', property: 'og:url', content: 'https://nfters-marketplace.netlify.app/' },
                { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
                { hid: 't-type', name: 'twitter:url', content: 'https://nfters-marketplace.netlify.app/' },
                { hid: 't-type', name: 'twitter:title', content: 'NFTERS - Discover, and collect Digital Art NFTs' },
                { hid: 't-type', name: 'twitter:description', content: 'NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT.' },
                { hid: 't-type', name: 'twitter:image', content: 'https://nfters-marketplace.netlify.app/static/nfters.png' },
                { name: "msapplication-TileColor", content: "#3D00B7" },
                { name: "theme-color", content: "#ffffff" }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }
            ]
        }
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    }
})
