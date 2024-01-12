<script setup>
    const route = useRoute();
    const fullPath = computed(() => route.fullPath)
    console.log('path', fullPath.value);

    const background = ref('background-beige');
    watch(fullPath, () => {
        console.log('watch triggered');
        if(fullPath.value === '/about'){
            background.value = 'background-blue';
            console.log('about received');
            console.log(background.value)
        }else if(fullPath.value ==='/projects'){
            background.value = 'background-red';
        }
        else if(fullPath.value ==='/contact'){
            background.value = 'background-salmon';
        }else {
            background.value = 'background-beige';
        }
    }, { immediate: true });


</script>

<template>
    <div :class="background" >
        <Navbar/>
        <slot/>
    </div>
</template>

<style >
.background-beige{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#FFF5E0;
}
.background-red{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#BB2525;
}
.background-blue{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#14225B;
}
.background-salmon{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#FF6969;
}
</style>