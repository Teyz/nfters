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
                left: 95px;
                width: 210px;
                height: 230px;

                @include above(small){
                    left: 320px;
                }

                @include above(medium) {
                    left: 72px;
                    width: 356px;
                    height: 390px;
                }
            }
            &.nft-card-3{
                z-index: 1;
                left: 20px;
                width: 210px;
                height: 230px;

                @include above(small){
                    left: 220px;
                }

                @include above(medium) {
                    left: 140px;
                    width: 310px;
                    height: 340px;
                }
            }
        }
    }
</style>