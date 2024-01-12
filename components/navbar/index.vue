<script setup>
    const openMenu = ref(false);
</script>

<template>  
    <nav>
        <div class="container">
            <NuxtLink to="/" class="nav-right" @click="() => openMenu=false">
            <img src="../../assets/images/logo_dark.svg">
            </NuxtLink>

            <div class="nav-right">
                <div class="nav-widget">
                    <button class="nav-btn">EN</button>
                    <button class="nav-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.94 4.485C8.31 12.025 13.69 16.895 17.6 18.285C16.21 19.375 14.48 19.995 12.67 19.995C8.26 19.995 4.67 16.405 4.67 11.995C4.67 8.545 6.87 5.595 9.94 4.485ZM12.66 2.005C7.07 2.005 2.67 6.535 2.67 11.995C2.67 17.515 7.15 21.995 12.67 21.995C16.38 21.995 19.6 19.975 21.33 16.975C13.82 16.725 9.24 8.545 13.01 2.005H12.66Z" fill="#141E46"/>
                        </svg> 
                    </button>
                </div>
                <NavbarBurguer @click="() => openMenu = !openMenu" class="burguer"/>
            </div>
        </div>
    </nav>
    <NavbarMenu class="nav-menu" v-if="openMenu" @closeMenu="() => openMenu = !openMenu"/>
</template>


<style scoped>
   

    nav{
        display: flex;
        justify-content: center;
        height:120px;
        align-items:center;
        width:100%;
        z-index: 2002;
        position: relative;
    }

    .container{
        width: 1040px;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .nav-right{
        display: flex;
        align-items:center;
        
    }
    .nav-widget{
        display:flex;
        align-items:center;
        width:85px;
        justify-content: space-between;
        padding-right:58px;
    }
    .nav-btn{
        background:transparent;
        border: none;
        font-family: Rounded Mplus 1c;
        font-size: 22px; 
        padding:0;
        cursor: pointer;
    }

    .burguer{
        cursor: pointer;
    }
    .nav-menu{
        position: fixed;
        inset: 0;
        background: rgba(255, 245, 224, 0.7);
        backdrop-filter: blur(20px);
        z-index: 2000;
    }

</style>

