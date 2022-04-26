<template>
    <div class="slider-root">
        <SliderCard/>
        <img src="@/assets/img/nft/nft-card-2.webp" alt="NFT Card 2" class="nft-card nft-card-2">
        <img src="@/assets/img/nft/nft-card-3.webp" alt="NFT Card 3" class="nft-card nft-card-3">
    </div>
</template>

<style scoped lang="scss">
    .slider-root{
        position: relative;

        .nft-card{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            object-fit: cover;

            &.nft-card-2{
                z-index: 2;
                left: 40px;
                width: 280px;

                @include above(medium) {
                    left: 72px;
                    width: 356px;
                }
            }
            &.nft-card-3{
                z-index: 1;
                left: -24px;
                width: 280px;

                @include above(medium) {
                    left: 140px;
                    width: 310px;
                }
            }
        }
    }
</style>