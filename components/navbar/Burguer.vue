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
        
        <div class="group">
            <div class="navline navline1 margin-bottom" :style="{ backgroundColor: color }"></div>
            <div class="navline navline2 margin-bottom" :style="{ backgroundColor: color }"></div>
            <div class="navline navline3" :style="{ backgroundColor: color }"></div>
        </div>
    </div>
</template>

<style>
.navline{
    height:4px;
    background-color:black;
    width:34px;
    border-radius:5px
}

.margin-bottom{
    margin-bottom:6px;
}
</style>