<template>
    <ul class="top-collection-list" v-for="item in 5" :key="item">
        <li><TopCollectionItem :index="item"/></li>
    </ul>
</template>

<style lang="scss" scoped>
.top-collection-list{
    li{
        padding: 16px 0;
        border-bottom: 1px solid $light_gray;

        &:last-child{
            border-bottom: none;
        }
    }
}
</style>