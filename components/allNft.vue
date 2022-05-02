<template>
    <section class="all-nft-root">
        <h2 class="black">Discover more NFTs</h2>
        <div class="filters">
            <ul>
                <li v-for="filter in filters" :key="filter.title" class="filter-item">{{filter.title}}</li>
            </ul>
            <button class="btn-filter" @submit.prevent>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_399)">
                <path d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z" fill="#371C87"/>
                </g>
                <defs>
                <clipPath id="clip0_0_399">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                All filters
            </button>
        </div>
        <ul class="all-nft-list">
            <li v-for="nft in 12" :key="nft" class="shadow"><NftCard/></li>
        </ul>
        <div class="all-nft-button">
            <button class="btn btn-white">More NFTs</button>
        </div>
    </section>
</template>

<script>
import getFilters from './allNftFilters';

export default defineComponent({
    setup(){
        const filters = getFilters;

        return { filters }
    }
})
</script>

<style lang="scss" scoped>
.all-nft-root{
    background-color: rgba(#D9E0EC, .2);

    padding: 24px;

    @include above(medium){
        padding: 64px 120px;
    }

    .filters{
        margin: 24px 0;

        @include above(medium){
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        ul{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;

            li{
                margin: 0 8px;

                &:first-child{
                    margin-left: 0;
                }

                &:last-child{
                    margin-right: 0;
                }
            }
        }

        .filter-item{
            cursor: pointer;
            background-color: rgba(#DCDCDC, .2);
            border-radius: 100px;
            padding: 12px 24px;
            color: black;
            font-size: 14px;
            font-weight: 500;
            font-family: 'DM Sans', sans-serif;
            transition: all 0.2s ease;

            &.active, &:hover{
                background-color: $primary;
                color: white;
            }
        }
    }

    .all-nft-list{
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        gap: 40px;

        margin-bottom: 56px;
    }

    .all-nft-button{
        display: flex;
        justify-content: center;
    }
}
</style>