<template>
    <section class="signup-banner-root">
        <div class="banner-images">
            <div class="banner-space-between">
                <div>
                    <img src="@/assets/img/signupBanner/nft-banner-1.webp" alt="" class="nft-banner-big">
                    <img src="@/assets/img/signupBanner/arkhan.webp" alt="" class="nft-profile-picture">
                </div>
                <div>
                    <img src="@/assets/img/signupBanner/nft-banner-2.webp" alt="" class="nft-banner-little">
                    <img src="@/assets/img/signupBanner/arkhan.webp" alt="" class="nft-profile-picture">
                </div>
            </div>
            <div class="banner-center">
                <img src="@/assets/img/signupBanner/nft-banner-3.webp" alt="" class="nft-banner-big">
                <img src="@/assets/img/signupBanner/chloe.webp" alt="" class="nft-profile-picture">
            </div>
        </div>
        <div class="banner-text">
            <h2 class="black">Create and sell your NFTs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
            <button class="btn">Sign Up Now</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.signup-banner-root{
    padding: 24px;

    @include above(medium){
        padding: 80px 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .banner-images{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 32px;

        @include above(big){
            margin-bottom: 0;
        }
    }

    .banner-space-between{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;

        >div{
            margin-bottom: 48px;
        }

        div{
            position: relative;
        }
    }

    .nft-banner-big{
        object-fit: cover;
        width: 150px;

        @include above(big){
            width: auto;
        }
    }

    .nft-banner-big{
        object-fit: cover;
        width: 120px;

        @include above(big){
            width: auto;
        }
    }

    .nft-banner-little{
        object-fit: cover;
        width: 100px;

        @include above(big){
            width: auto;
        }
    }

    .banner-center{
        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        @include above(medium){
            margin-left: 64px;
        }
    }

    .banner-text{
        p{
            margin: 32px 0;
        }

        @include above(medium){
            max-width: 520px;

            margin-left: 72px;
        }
    }

    .nft-profile-picture{
        position: absolute;

        bottom: -20px;
        right: -20px;

        object-fit: cover;
        width: 50px;

        z-index: 1;
    }
}
</style>