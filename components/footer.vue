<template>
    <footer>
        <div class="footer-top">
            <div class="footer-about">
                <h3 class="black integralFont">NFTERS</h3>
                <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
            </div>
            <FooterLinks title="Market Place" :links="marketLinks"/>
            <FooterLinks title="My Account" :links="accountLinks"/>
            <div class="footer-newsletter">
                <h4 class="black">Stay in the loop</h4>
                <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                <form class="form-newsletter">
                    <input type="text" placeholder="Enter your email address.." name="search">
                    <button class="btn" type="submit">Subscibe Now</button>
                </form>
            </div>
        </div>
        <div class="footer-sub">
            <p>Copyright © 2022 Avi Yansah (Design) & Bastien Rigaud (Development)</p>
        </div>
    </footer>
</template>

<script>
import getAccountLinks from './accountLinks';
import getMarketLinks from './MarketLinks';

export default defineComponent({
    setup(){
        const accountLinks = getAccountLinks;
        const marketLinks = getMarketLinks;

        return {accountLinks, marketLinks}
    }
});

</script>

<style lang="scss" scoped>
    footer{

        .footer-top{
            padding: 24px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;

            @include above(medium){
                padding: 72px 120px;
            }

            .footer-about{
                margin-bottom: 24px;
                p{
                    margin-top: 24px;
                }
                @include above(medium){
                    max-width: 340px;
                    margin-bottom: 0;
                }
            }
        }
        .footer-sub{
            border-top: 1px solid $light_gray;
            padding: 16px 0;
            text-align: center;

            p{
                font-size: 14px;
                color: #A4A4A4;
            }
        }

        .footer-newsletter{
            margin-top: 24px;
            @include above(medium){
                max-width: 400px;
                margin-top: 0;
            }

            p{
                margin: 24px 0;
            }
        }

        .form-newsletter{
            position: relative;

            input{
                border: 2px solid $light_gray;
                border-radius: 100px;
                font-family: 'DM Sans', sans-serif;
                font-weight: 500;
                color: #C0C0C0;
                font-size: 12px;
                padding: 16px 32px;
                width: 100%;

                &:focus-visible, &:focus{
                    outline: none;
                    border: 2px solid #2639ED;
                }
            }

            button{
                background-color: #2639ED;
                font-weight: 700;
                padding: 10px 24px;
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        p{
            font-size: 14Px;
        }
    }
</style>