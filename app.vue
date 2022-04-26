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
      { name: 'title', content: 'NFTERS - Marketplace' },
      { name: 'description', content: 'NFTERS is a NFT marketplace powered by Ethereum. Join us and upload / buy your first NFT.' },
      { hid: 'og:title', name: 'og:title', content: 'NFTERS - Marketplace'},
      { hid: 'og:image', property: 'og:image', content: 'https://nfters-marketplace.netlify.app/static/nfters.webp' },
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


