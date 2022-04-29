<template>
    <div class="top-collection-item-root">
        <span class="item-index">
            {{index}}
        </span>
        <div class="nft-image">
            <img src="@/assets/img/collections/rounded-nft.webp" alt="">
        </div>
        <div class="nft-price-main">
            <h5 class="black wMedium">CryptoFunks</h5>
            <div class="nft-price">
                <img src="@/assets/img/crypto/ethereum-v-b.svg" alt="">
                <p>19,769.39</p>
            </div>
        </div>
        <h4 :class="isIncrease">
            <span v-if="isIncrease">+</span>
            <span v-else>-</span>
            26.52%
        </h4>
    </div>
</template>

<script>
export default defineComponent({
    props: {
        index:{
            type: Number,
            default: 1
        },
        isIncrease: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style lang="scss" scoped>
    .top-collection-item-root{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .item-index{
            font-family: 'DM Sans', sans-serif;
            font-size: 24px;
            font-weight: 700;
        }

        .nft-image{
            margin: 0 24px;
        }

        h4{
            color: $red;
            margin-left: 24px;

            &.isIncrease{
                color: #14C8B0;
            }
        }
    }
</style>