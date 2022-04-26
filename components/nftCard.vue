<template>
    <div class="nft-card-root">
        <div class="nft-card-header">
            <img src="@/assets/img/collections/nft-card-1.png" alt="NFT card image">
            <ul class="nft-card-creators">
                <li><img src="@/assets/img/pp/creator-1.png" alt="NFT card creator profile picture"></li>
                <li><img src="@/assets/img/pp/creator-2.png" alt="NFT card creator profile picture"></li>
                <li><img src="@/assets/img/pp/creator-3.png" alt="NFT card creator profile picture"></li>
                <li><img src="@/assets/img/pp/creator-4.png" alt="NFT card creator profile picture"></li>
            </ul>
        </div>
        <div class="nft-card-main">
            <h4 class="black">ArtCrypto</h4>
            <div class="nft-card-bid">
                <div class="nft-card-price">
                    <img src="@/assets/img/crypto/ethereum-g.png" alt="">
                    <p class="small wBold">0.25 ETH</p>
                </div>
                <p>1 of 321</p>
            </div>
        </div>
        <div class="nft-card-footer">
            <h5 class="purple">12<span>h</span> 43<span>m</span>  42<span>s left</span></h5>
            <button class="btn btn-no-border btn-bid">Place a bid</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nft-card-root{
    padding: 12px;

    background-color: white;

    border-radius: 12px;
}

.nft-card-header{
    position: relative;
    img{
        object-fit: cover;
        width: 280px;
    }
    .nft-card-creators{
        position: absolute;
        bottom: -5%;
        left: 5%;
        display: flex;

        li{
            margin-left: -16px;

            &:first-child{
                margin-left: 0;
            }
        }
    }
}

.nft-card-main{
    margin-top: 24px;
    border-bottom: 1px solid #F4F4F4;
}

.nft-card-bid{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 12px 0 24px 0;


    p{
        color: #838383;
        font-size: 13px;
        line-height: 19px;
    }
}
.nft-card-price{
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        margin-left: 6px;
        color:#00AC4F;
    }
}

.nft-card-footer{
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h5{
        background-color: #F5F5F5;
        border-radius: 100px;

        padding: 8px 12px;

        font-size: 12px;
    }
}
</style>