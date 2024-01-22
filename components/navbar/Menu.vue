<script setup>
    import EmailIcon from '../../assets/svg/email_icon.svg';
    const localPath = useLocalePath();
</script>

<template>
    <main>
        <div class="visible">
            <ul class="z-top">
                <li class="li-padding-bottom" @click="$emit('closeMenu')"><NuxtLink :to="localPath('/about')" >/{{ $t("menu.cat1")}}</NuxtLink></li>
                <li class="li-padding-bottom" @click="$emit('closeMenu')"><NuxtLink :to="localPath('/projects')">/{{ $t("menu.cat2")}}</NuxtLink></li>
                <li @click="$emit('closeMenu')"><NuxtLink :to="localPath('/contact')">/{{ $t("menu.cat3")}}</NuxtLink></li>
            </ul>
            <div class="flex mail-block">
                <p class="email">karpaloma@hotmail.com</p>
                <EmailIcon class="svg"/>
            </div>
        </div>
        
    </main>
</template>

<style scoped>
li{
    font-family: Chonburi;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    opacity: 0;
    animation: slide-up linear 0.4s ;
    animation-fill-mode: both;
}
li:nth-child(1){
    animation-delay: 0.2s;
}
li:nth-child(2){
    animation-delay: 0.4s;
}
li:nth-child(3){
    animation-delay: 0.6s;
}
ul{
    margin-top: 240px;
    margin-bottom: 110px;
    list-style-type: none;
}
.z-top{
    z-index: 1000;
}
.li-padding-bottom{
    padding-bottom: 50px;
}
.flex{
    display: flex;
    align-items: center;
    animation: slide-up linear 0.4s ;
    animation-fill-mode: both;
    animation-delay: 0.8s;
}
.email{
    padding-top: 0;
    padding-right: 10px;
    padding-left: 40px;
    color: var(--color-blue);
    font-family: Roundo;
    font-size: 24px;
    font-style: normal;
    font-weight: 400; 
    
}
.svg{
    width:24px;
    height:24px; 
}
/* Take away underline from links */
a:link { 
    text-decoration: none; 
    color: var(--color-navbar-blue);
} 
a:visited { 
    text-decoration: none; 
    color: var(--color-navbar-blue);
} 
a:hover { 
    text-decoration: none; 
    color: var(--color-navbar-blue);
} 
a:active { 
    text-decoration: none; 
    color: var(--color-navbar-blue);
}
@media only screen and (max-width: 672px) {
    li{
        font-size: 48px;
    }
}

/*** TRANSITIONS ***/
@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(25%);
        
    }
    to {
        opacity: 1;
        transform: translateY(0%);
        }
  }


</style>