<script setup>
    const colorMode = useColorMode()

    console.log(colorMode.preference)
</script>

<template>
    <div class="">
    <div class="relative">
        <div class="rect1"></div>
        <div class="rect2 absolute"></div>
        <div class="rect3 absolute"></div>
        <div class="rect4 absolute"></div>
    </div>
</div>
</template>

<style scoped>

.rect1{
width: 652px;
height: 530px;
border-radius: 20px;
background-color: var(--color-beige);
transition: all 0.3s ease-out;
}

.rect2{
width: 864px;
height: 166px;
border-radius: 20px;
background-color: var(--color-beige);
top: 0;

}

.rect3{
width: 265px;
height: 458px;
border-radius: 20px;
background: var(--color-beige);
top:0px;
left: 500px;

}
.rect4{
width: 240px;
height: 355px; 
border-radius: 20px;
background: var(--color-blue);
opacity: 1;
top:166px;
left: 652px;
transition: all 0.3s ease-out;
}

/*RESPONSIVE*/
@media only screen and (max-width: 900px) {
    .rect1{
        width: 486px;
        height: 155px; 
    }
    .rect2{
        width: 652px;
        height: 455px; 
        top:155px;
    }
    .rect3{
        width: 500px;
        height: 223px; 
        top: 38px;
        left: 0;
        
    }
    .rect4{
        width: 170px;
        height: 228px; 
        left: 486px;
        top: -73px;
        
    }   
    
    }

@media only screen and (max-width: 696px) {
.rect1{
    width: 167px;
    height: 155px; 
}
.rect2{
    width: 333px;
    height: 455px; 
    top:155px;
}
.rect3{
    width: 313px;
    height: 223px; 
    top: 38px;
    left: 0;
    
}
.rect4{
    width: 170px;
    height: 228px; 
    left: 167px;
    top: -73px;
    
}   

}
</style>