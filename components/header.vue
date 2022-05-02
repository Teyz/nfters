<template>
    <nav class="navbar">
        <div class="nav-main">
            <div class="logo">NFTERS</div>
            <ul class="nav-links">
                <li class="nav-item"><a href="/">Marketplace</a></li>
                <li class="nav-item"><a href="/">Resource</a></li>
                <li class="nav-item"><a href="/">About</a></li>
            </ul>
        </div>
        <form class="nav-search" @submit.prevent>
            <input type="text" placeholder="Search" name="search">
            <button type="submit"><img src="@/assets/img/icons/search.svg" alt=""></button>
        </form>
        <div class="nav-buttons">
            <button class="btn">Upload</button>
            <button class="btn btn-white">Connect Wallet</button>
        </div>
        <div class="headerBurger" @click="toggleMenuAnimation()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="fullscreenMenu" @wheel.prevent @touchmove.prevent @scroll.prevent>
            <ul>
                <li class="nav-item"><NuxtLink to="/">Marketplace</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/">Resource</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/">About</NuxtLink></li>
                <li>
                    <form class="nav-search" @submit.prevent>
                        <input type="text" placeholder="Search" name="search">
                        <button type="submit"><img src="@/assets/img/icons/search.svg" alt=""></button>
                    </form>
                </li>
                <li>
                    <button class="btn">Upload</button>
                </li>
                <li>
                    <button class="btn btn-white">Connect Wallet</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
    const isShowMenu = ref(false);
    const toggleMenuAnimation = () => {
        const burger = document.querySelector('.headerBurger')
        if (burger.classList.contains('open')) {
            burger.classList.remove('open')
        } else {
            burger.classList.add('open')
        }
        isShowMenu.value = !isShowMenu.value;
        toggleMenu(isShowMenu.value)
    }
    const toggleMenu = (isShowMenu) => {
        const menu = document.querySelector('#fullscreenMenu')
        if (isShowMenu) {
            menu.style.transform = 'translateX(0%)'
            menu.style.opacity = '1'
            menu.style.zIndex = '10'
            menu.style.visibility = 'visible'
        } else {
            menu.style.transform = 'translateX(8px)'
            menu.style.opacity = '0'
            menu.style.visibility = 'hidden'
            menu.style.zIndex = '-1'
        }
    }
</script>

<style lang="scss" scoped>
    .navbar{
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 1px solid $light_gray;

        @include above(xsmall) {
            padding: 24px 72px;
            margin-bottom: 32px;
        }
    }

    .nav-main{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo{
        font-family: 'Integral CF', sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: $primary;
        margin: 0 24px;
    }

    .nav-links{
        display: none;

        padding: 12px 0;

        border-left: 1px solid $light_gray;

        @include above(big) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .nav-item{
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        margin: 0 24px;
    }

    .nav-search{
        position: relative;
        display: none;

        @include above(big) {
            display: block;
        }

        input{
            border: 2px solid $light_gray;
            border-radius: 100px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            color: #C0C0C0;
            font-size: 16px;
            padding: 16px 32px;

            &:focus-visible, &:focus{
                outline: none;
                border: 2px solid $primary;
            }
        }

        button{
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .nav-buttons{
        margin-left: 24px;
        display: none;

        @include above(big) {
            display: block;
        }

        .btn{
            margin-right: 24px;
        }
    }
    #fullscreenMenu {
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        transform: translateX(8px);
        background-color: rgba(white, 0.95);
        display: flex;
        transition: all 0.5s ease;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        ul {
            list-style: none;
            padding: 0 auto;

            li {
            margin: 24px 0;
            text-align: center;

                a {
                    font-size: 32px;
                }

                .nav-search{
                    display: block;
                }
            }
        }
    }
</style>