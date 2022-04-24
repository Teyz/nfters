<template>
    <div class="collection-item-root">
        <img src="@/assets/img/collections/collection-item-1.png" alt="">
        <div class="collection-item-main">
            <h4 class="black">The Futr Abstr</h4>
            <div class="collection-item-infos">
                <img src="@/assets/img/pp/Arkhan17.webp" alt="">
                <div class="collection-item-price">
                    <img src="@/assets/img/crypto/ethereum-g.png" alt="">
                    <p class="small wBold">0.25 ETH</p>
                </div>
                <p class="medium">1 of 8</p>
            </div>

            <button class="btn">Place a bid</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .collection-item-root{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .collection-item-main{
            margin-left: 16px;
        }
        .collection-item-infos{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 4px 0 8px 0;
        }
        .collection-item-price{
            padding: 8px;
            border: 1px solid #00AC4F;
            border-radius: 6px;
            margin: 0 10px 0 8px;

            display: flex;
            justify-content: center;
            align-items: center;

            p{
                color:#00AC4F;
            }
        }
    }
</style>