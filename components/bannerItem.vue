<template>
    <div class="banner-item-root">
        <img :src="icon" alt="Icon for banner item">
        <div class="banner-item-infos">
            <h4 class="black">{{ title }}</h4>
            <p class="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
        </div>
    </div>
</template>

<script>
import card from "@/assets/img/icons/card.webp";
import chart from "@/assets/img/icons/chart.webp";
export default defineComponent({
    props:{
        img: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: ""
        }
    },
    setup(props){
        const icon = ref('');

        if(props.img === "card"){
            icon.value = card;
        } else {
            icon.value = chart;
        };

        return { icon };
    }
});
</script>

<style scoped lang="scss">
    .banner-item-root{
        display: flex;
        align-items: flex-start;
        justify-content: center;

        margin-top: 48px;

        @include above(medium){
            margin: 0;
        }

        .banner-item-infos{
            margin-left: 16px;

            p{
                margin-top: 12px;
                max-width: 250px;
            }
        }
    }
</style>