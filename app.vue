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
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: 'Junior Software Engineer at Spendesk. Based in Bordeaux. Available for freelance contracts.' },
      { hid: 'og:title', name: 'og:title', content: 'Bastien Rigaud - Portfolio'},
      { hid: 'og-image', property: 'og:image',
        content: 'https://www.bastienrigaud.fr/og.webp'
      },
      { hid: 'og:image', property: 'og:image',
        content: 'https://www.bastienrigaud.fr/og.webp'
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-desc', property: 'og:description', content: 'Junior Software Engineer at Spendesk. Based in Bordeaux. Available for freelance contracts.' },
      { hid: 'og-url', property: 'og:url', content: 'https://wwww.bastienrigaud.fr' },
      { name: "msapplication-TileColor", content: "#da532c" },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 't-type', name: 'twitter:url', content: 'https://wwww.bastienrigaud.fr' },
      { hid: 't-type', name: 'twitter:title', content: 'Bastien Rigaud - Portfolio' },
      { hid: 't-type', name: 'twitter:description', content: 'Junior Software Engineer at Spendesk. Based in Bordeaux. Available for freelance contracts' },
      { hid: 't-type', name: 'twitter:image', content: 'https://www.bastienrigaud.fr/og.webp' },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  })
</script>

<style>
    html,body { margin: 0 !important;}
</style>


