<script setup>
    const route = useRoute();
    const fullPath = computed(() => route.fullPath)
    //console.log('path', fullPath.value);
    const background = ref('background-beige');

    /* Choose backgorund color */
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
        <Navbar :background="background"/>
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
    background-color: var(--color-beige);
}
.background-red{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-red);
}
.background-blue{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:var(--color-blue-about);
}
.background-salmon{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-salmon);
}
</style>