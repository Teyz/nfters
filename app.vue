<template>
  <div>
    <Head><Title>NFTERS - Marketplace</Title></Head>
    <Header/>
    <Hero/>
    <Banner/>
    <TopCollection/>
    <FeaturedCollection/>
    <SignupBanner/>
    <AllNft/>
    <Footer/>
  </div>
</template>

<script setup>
  useHead({
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    charset: 'utf-8',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'title', content: 'NFTERS - Discover, and collect Digital Art NFTs' },
      { name: 'description', content: 'NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT.' },
      { hid: 'og:title', name: 'og:title', content: 'NFTERS - Discover, and collect Digital Art NFTs'},
      { hid: 'og-image', property: 'og:image',
        content: 'https://nfters-marketplace.netlify.app/static/nfters.webp'
      },
      { hid: 'og:image', property: 'og:image',
        content: 'https://nfters-marketplace.netlify.app/static/nfters.webp'
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-desc', property: 'og:description', content: 'NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT.' },
      { hid: 'og-url', property: 'og:url', content: 'https://nfters-marketplace.netlify.app/' },
      { name: "msapplication-TileColor", content: "#3D00B7" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }
    ]
  })
</script>

<style>
    html,body { margin: 0 !important;}
</style>


