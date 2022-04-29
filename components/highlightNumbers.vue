<template>
    <ul>
        <li>
            <span class="wRegular integralFont"><h2 id="nbr">32</h2>K+</span>
            <p>Artwork</p>
        </li>
        <li>
            <span class="wRegular integralFont"><h2 id="nbr">12</h2>K+</span>
            <p>Auction</p>
        </li>
        <li>
            <span class="wRegular integralFont"><h2 id="nbr">15</h2>K+</span>
            <p>Artist</p>
        </li>
    </ul>
</template>

<script>

export default defineComponent({
    setup () {
        onMounted(() => {
            incEltNbr();
        });

        const speed = 30;

        const incEltNbr = () => {
            const elt = document.querySelectorAll('#nbr');
            console.log(elt);
            elt.forEach((el) => {
                const endNbr = el.innerHTML;
                incNbrRec(0, endNbr, el);
            });
        }

        const incNbrRec = (i, endNbr, elt) => {
            if (i <= endNbr) {
                elt.innerHTML = i;
                setTimeout(function() {
                incNbrRec(i + 1, endNbr, elt);
                }, speed);
            }
        }
    }
});
</script>

<style scoped lang="scss">
    ul{
        margin-top: 32px !important;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        li{
            margin: 0 12px;

            &:first-child{
                margin-left: 0;
            }
        }

        span{
            font-size: 35px;
            display: flex;
        }
    }
</style>