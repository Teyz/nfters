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
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }
    ]
  })
</script>

<style>
    html,body { margin: 0 !important;}
</style>


