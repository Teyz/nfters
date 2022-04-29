<template>
    <section class="featured-collection-root">
        <h2>Collection Featured NFTs</h2>
        <ul class="featured-collection-list">
            <li>
                <div class="main-collection-single">
                    <div class="featured-collection-main">
                        <img src="@/assets/img/collections/topCollectionSingle.webp" alt="Top collection NFT image" class="top-collection-image-small">
                        <ul class="featured-collection-preview">
                            <li><img src="@/assets/img/collections/featured/featured-1.webp" alt="Featured collection NFT preview"></li>
                            <li><img src="@/assets/img/collections/featured/featured-2.webp" alt="Featured collection NFT preview"></li>
                            <li><img src="@/assets/img/collections/featured/featured-3.webp" alt="Featured collection NFT preview"></li>
                        </ul>
                    </div>
                    <div class="featured-collection-single-infos">
                        <h3 class="black">Amazing collection</h3>
                        <div class="featured-collection-single-image">
                            <div>
                                <img src="@/assets/img/pp/Arkhan17-b.webp" alt="Arkhan17 profile picture">
                                <p>by Arkhan17</p>
                            </div>
                            <button class="btn btn-small btn-white">Total 54 Items</button>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="main-collection-single">
                    <div class="featured-collection-main">
                        <img src="@/assets/img/collections/topCollectionSingle.webp" alt="Top collection NFT image" class="top-collection-image-small">
                        <ul class="featured-collection-preview">
                            <li><img src="@/assets/img/collections/featured/featured-1.webp" alt="Featured collection NFT preview"></li>
                            <li><img src="@/assets/img/collections/featured/featured-2.webp" alt="Featured collection NFT preview"></li>
                            <li><img src="@/assets/img/collections/featured/featured-3.webp" alt="Featured collection NFT preview"></li>
                        </ul>
                    </div>
                    <div class="featured-collection-single-infos">
                        <h3 class="black">Amazing collection</h3>
                        <div class="featured-collection-single-image">
                            <div>
                                <img src="@/assets/img/pp/Arkhan17-b.webp" alt="Arkhan17 profile picture">
                                <p>by Arkhan17</p>
                            </div>
                            <button class="btn btn-small btn-white">Total 54 Items</button>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="main-collection-single">
                    <div class="featured-collection-main">
                        <img src="@/assets/img/collections/topCollectionSingle.webp" alt="Top collection NFT image" class="top-collection-image-small">
                        <ul class="featured-collection-preview">
                            <li><img src="@/assets/img/collections/featured/featured-1.webp" alt="Featured collection NFT preview"></li>
                            <li><img src="@/assets/img/collections/featured/featured-2.webp" alt="Featured collection NFT preview"></li>
                            <li><img src="@/assets/img/collections/featured/featured-3.webp" alt="Featured collection NFT preview"></li>
                        </ul>
                    </div>
                    <div class="featured-collection-single-infos">
                        <h3 class="black">Amazing collection</h3>
                        <div class="featured-collection-single-image">
                            <div>
                                <img src="@/assets/img/pp/Arkhan17-b.webp" alt="Arkhan17 profile picture">
                                <p>by Arkhan17</p>
                            </div>
                            <button class="btn btn-small btn-white">Total 54 Items</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    .featured-collection-root{
        background-color: rgba(#D9E0EC, .2);
        padding: 24px;

        @include above(medium){
            padding: 64px 120px;
        }

        .featured-collection-main{
            @include above(medium){
                display: flex;
                align-items:flex-start;
                justify-content: space-between;
            }
        }

        .featured-collection-preview{
            margin-top: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @include above(medium){
                margin-top: 0;
                margin-left: 12px;
                display: block;

                img{
                    object-fit: cover;
                    width: 100px;
                }
            }
        }

        .featured-collection-list{
            margin-top: 24px;

            li{
                margin: 24px 0;
            }
            @include above(medium){
                margin: 56px 0 0 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;

                li{
                    margin: 0;
                }
            }
        }

        .featured-collection-single-infos{
            h3{
                margin: 24px 0 12px 0;
            }

            div{
                display: flex;
                align-items: center;
                justify-content: space-between;

                p{
                    color: black;
                    margin-left: 12px;
                }
            }
        }

        .featured-collection-single-image{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>
