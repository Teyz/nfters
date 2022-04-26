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
      { name: 'title', content: 'My amazing site.' },
      { name: 'description', content: '' },
      { hid: 'og:title', name: 'og:title', content: 'NFTERS - Marketplace'},
      { name: "msapplication-TileColor", content: "#3D00B7" },
      { name: "theme-color", content: "#ffffff" }
    ]
  })
</script>

<style>
    html,body { margin: 0 !important;}
</style>


