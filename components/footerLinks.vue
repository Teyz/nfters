<template>
    <div class="footer-links">
        <h4 class="black">{{title}}</h4>
        <ul>
            <li><NuxtLink to="/">All NFTs</NuxtLink></li>
            <li><NuxtLink to="/">New</NuxtLink></li>
            <li><NuxtLink to="/">Art</NuxtLink></li>
            <li><NuxtLink to="/">Sports</NuxtLink></li>
            <li><NuxtLink to="/">Utility</NuxtLink></li>
            <li><NuxtLink to="/">Music</NuxtLink></li>
            <li><NuxtLink to="/">Domain Name</NuxtLink></li>
        </ul>
    </div>
</template>

<script>
export default defineComponent({
    props:{
        title: {
            type: String,
            default: '',
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