<template>
    <div class="footer-links">
        <h4 class="black">{{title}}</h4>
        <ul>
            <li v-for="link in links" :key="link"><NuxtLink :to="link.link">{{link.title}}</NuxtLink></li>
        </ul>
    </div>
</template>

<script>
export default defineComponent({
    props:{
        title: {
            type: String,
            default: '',
        },
        links: {
            type: Array,
            default: []
        }
    }
})
</script>

<style lang="scss" scoped>
.footer-links{
    ul{
        margin-top: 24px;

        li{
            margin: 8px 0;

            a{
                font-family: 'DM Sans', sans-serif;
                font-size: 14px;
                font-weight: 500;
                color: #3D3D3D;
            }
        }
    }
}
</style>