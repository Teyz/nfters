<template>
    <section class="top-collection">
        <div class="main-collection-root">
            <div class="main-collection-single">
                <img src="@/assets/img/collections/topCollectionSingle.webp" alt="Top collection NFT image" class="top-collection-image">
                <div class="main-collection-single-infos">
                    <div class="main-collection-single-image">
                        <img src="@/assets/img/pp/Arkhan17-b.png" alt="Arkhan17 profile picture">
                        <div>
                            <h4 class="black">The Futr Abstr</h4>
                            <p class="medium">10 in the stock</p>
                        </div>
                    </div>
                    <div class="main-collection-single-bid">
                        <p class="small wMedium">Highest Bid</p>
                        <div class="nft-price">
                            <img src="@/assets/img/crypto/ethereum-v-b.png" alt="Ethereum logo for current bid">
                            <h5 class="black">0.25 ETH</h5>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="main-collection-list">
                <li><CollectionItem/></li>
                <li><CollectionItem/></li>
                <li><CollectionItem/></li>
            </ul>
        </div>
        <div class="top-collection-root">
            <h3 class="wBold small black integralFont">Top Collections over </h3>
            <p class="big purple wBold">Last 7 days</p>
            <TopCollectionList/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .top-collection{
        padding: 32px;
        @include above(medium){            
            padding: 136px 120px;
        }

        @include above(large){
            display: flex;
        }

        .main-collection-root{
            @include above(medium){
                display: flex;
            }
        }

        .main-collection-single{
            .top-collection-image{
                object-fit: cover;
                width: 100%;
                @include above(medium){
                    width: auto;
                }
            }

            .main-collection-single-infos{
                margin-top: 32px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .main-collection-single-image{
                    display: flex;
                    align-items: center;

                    &>img{
                        margin-right: 10px;
                    }
                }
            }
        }

        .main-collection-list{
            @include above(medium){
                margin-left: 56px;
            }

            li{
                margin: 20px 0;

                @include above(medium){
                    margin: 40px 0;
                    &:first-child{
                        margin-top: 0;
                    }
                }
            }
        }

        .top-collection-root{
            @include above(large){
                margin-left: 56px;
                padding-left: 36px;
                border-left: 1px solid $light_gray;
            }
            p{
                margin-top: 10px;
            }
        }
    }
</style>