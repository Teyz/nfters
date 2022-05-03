import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    ssr: false,
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
                { hid: 'og:image', property: 'og:image', content: 'https://nfters-marketplace.netlify.app/static/nfters.webp' },
                { hid: 'twitter:card' , content:"summary_large_image" },
                { hid: 'twitter:url' , content:"https://nfters-marketplace.netlify.app/" },
                { hid: 'twitter:title' , content:"NFTERS - Discover, and collect Digital Art NFTs" },
                { hid: 'twitter:description' , content:"NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT." },
                { hid: 'twitter:image' , content:"https://nfters-marketplace.netlify.app/static/nfters.webp" },
                { name: "msapplication-TileColor", content: "#3D00B7" },
                { name: "theme-color", content: "#ffffff" }
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
