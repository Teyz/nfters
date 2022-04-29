<template>
    <div class="card-root">
        <div class="card-header">
            <h3>Abstr Gradient NFT</h3>
            <div class="card-people">
                <img src="@/assets/img/pp/Arkhan17.webp" alt="Arkhan17 profile picture">
                <h4>Arkhan17</h4>
            </div>
        </div>
        <div class="card-footer">
            <div class="nft-bid">
                <p class="white small">Current Bid</p>
                <div class="nft-price">
                    <img src="@/assets/img/crypto/ethereum.svg" alt="Ethereum logo for current bid">
                    <h5>0.25 ETH</h5>
                </div>
            </div>
            <div class="nft-ends">
                <p class="white small">Ends in</p>
                <h5>12<span>h</span> 43<span>m</span>  42<span>s</span></h5>
            </div>
        </div>
        <div class="nft-sticker">
            <img src="@/assets/img/sticker/sticker-text.svg" alt="Text for card sticker" class="sticker-text">
            <img src="@/assets/img/crypto/ethereum-b.svg" alt="Ethereum logo for card sticker">
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card-root{
        background-image: url("@/assets/img/nft/nft-card-1.webp");
        background-repeat: no-repeat;
        background-size: cover;
        height: 360px;
        width: 326px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: relative;

        z-index: 3;

        @include above(medium) {
            width: 400px;
            height: 440px;
        }

        padding: 24px;

        .card-people{
            display: flex;
            align-items: center;
            justify-content: flex-start;

            margin-top: 8px;

            h4{
                margin-left: 16px;
            }
        }

        .card-footer{
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(50px);
            border-radius: 12px;

            padding: 16px 24px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            p{
                margin-bottom: 8px;
            }
        }

        .nft-sticker{
            position: absolute;
            left: -10%;
            bottom: 30%;

            background-color: #FFE0D4;
            border-radius: 1000px;
            width: 100px;
            height: 100px;

            display: flex;
            align-items: center;
            justify-content: center;

            .sticker-text{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>