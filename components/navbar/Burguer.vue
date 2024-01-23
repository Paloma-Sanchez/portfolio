<script setup>

const props = defineProps({
    color:{
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <div class="hamburguer-group">
            <div class="navline1 " id="navline1" :style="{ backgroundColor: color }"></div>
            <div class="navline2 margin-bottom" id="navline2" :style="{ backgroundColor: color }"></div>
            <div class="navline3" id="navline3" :style="{ backgroundColor: color }"></div>
        </div>
    </div>
</template>

<style scoped>
.hamburguer-group:hover{
    transform: scale(1.2);
}
.navline1,
.navline2,
.navline3{
    height:4px;
    background-color:black;
    width:34px;
    border-radius:5px;
    transition: all 0.2s ease-in-out;
}
.navline1{
    
    margin-bottom:6px;
}
.navline2{
    margin-bottom:6px;
}
.navline1.a{
    transform:  rotate(40deg)  translateX(4px) translateY(11px);
}
.navline2.b{
    transform: rotate(-40deg)   translateX(-2px) translateY(-1px) ;
}
.navline3.c{
    opacity: 0;
}

</style>