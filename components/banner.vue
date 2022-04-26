<template>
    <div class="banner-root">
        <h2>The amazing NFT art of the world here</h2>
        <BannerItem img="card" title="Fast Transaction"/>
        <BannerItem img="chart" title="Growth Transaction"/>
    </div>
</template>

<style lang="scss" scoped>
    .banner-root{
        background-color: rgba(#D9E0EC, .2);
        padding: 48px;

        @include above(medium){
            padding: 136px 120px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        h2{
            max-width: 400px;

            text-align: center;

            @include above(medium){
                text-align: left;
            }
        }
    }
</style>