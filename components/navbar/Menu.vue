<script setup>
    const beforeEnter = (el) => {
        el.style.opacity = 0
        el.style.transform = 'scale(0,0)'
    }

    const enter = (el, done) => {
                gsap.to(el, {
                    duration: 1,
                    opacity: 1,
                    scale: 1,
                    onComplete: done
                })
    }

    const mounted = () => {
        gsap.from('li', {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 200,
        ease: 'power1',
        stagger: 0.1
    })
    }
</script>

<template>
    <main>
        <div class="visible">
            <ul class="z-top">
                <li class="li-padding-bottom" @click="$emit('closeMenu')"><NuxtLink to="/about" >/About</NuxtLink></li>
                <li class="li-padding-bottom" @click="$emit('closeMenu')"><NuxtLink to="/projects">/Projects</NuxtLink></li>
                <li><NuxtLink to="/contact" @click="$emit('closeMenu')">/Contact</NuxtLink></li>
            </ul>
            <div class="flex">
                <p class="email">karpaloma@hotmail.com</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_16_206)">
                      <path d="M20 4C21.0544 4 21.9182 4.81588 21.9945 5.85074L22 6V18C22 19.0544 21.1841 19.9182 20.1493 19.9945L20 20H4C2.94564 20 2.08183 19.1841 2.00549 18.1493L2 18V17H4V18H20V7.41437L13.0607 14.3536C12.5116 14.9028 11.6425 14.9371 11.0533 14.4566L10.9394 14.3536L4 7.41421V8H2V6C2 4.94564 2.81588 4.08183 3.85074 4.00549L4 4H20ZM6 13C6.55228 13 7 13.4477 7 14C7 14.5523 6.55228 15 6 15H1C0.447715 15 0 14.5523 0 14C0 13.4477 0.447715 13 1 13H6ZM18.5859 6H5.41421L12.0001 12.5859L18.5859 6ZM5 10C5.55228 10 6 10.4477 6 11C6 11.5128 5.61396 11.9355 5.11662 11.9933L5 12H2C1.44772 12 1 11.5523 1 11C1 10.4871 1.38604 10.0645 1.88338 10.0067L2 10H5Z" fill="#09244B"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_16_206">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        
    </main>
</template>

<style scoped>
li{
   
    color: #141E46;
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
}
.email{
    padding-left: 40px;
    color: #171615;
    font-family: Roundo;
    font-size: 24px;
    font-style: normal;
    font-weight: 400; 
    padding-top: 0;
}
/* Take away underline from links */
a:link { 
    text-decoration: none; 
    color: #141E46;
} 
a:visited { 
    text-decoration: none; 
    color: #141E46;
} 
a:hover { 
    text-decoration: none; 
    color: #141E46;
} 
a:active { 
    text-decoration: none; 
    color: #141E46;
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