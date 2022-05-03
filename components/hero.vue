<template>
    <section class="hero">
        <div class="hero-main">
            <h1>Discover, and collect Digital Art NFTs</h1>
            <p>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
            <button class="btn">Explore Now</button>
            <HighlightNumbers/>
        </div>
        <div class="hero-slider">
            <Slider/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .hero{
        padding: 32px;

        @include above(medium) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        @include above(big) {
            padding: 56px 136px 120px 120px;
        }

        .hero-main{
            position: relative;
            max-width: 620px;
            p{
                margin: 24px 0;
                font-size: 18px;
            }

            &:before{
                content: url("@/assets/img/hero/dot.webp");
                position: absolute;
                bottom: 0;
                left: 0;
                object-fit: cover;
                z-index: -1;

                @include above(medium) {
                    bottom: 20%;
                    left: -5%;
                }
            }
        }

        .hero-slider{
            margin-top: 24px;
            @include above(medium) {
                margin-top: 0;
            }
        }
    }
</style>