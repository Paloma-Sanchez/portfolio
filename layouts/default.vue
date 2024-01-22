<script setup>
    const route = useRoute();
    const fullPath = computed(() => route.fullPath);
    
    const background = ref('background-beige');

    /* Choose backgorund color */
    watch(fullPath, () => {
        console.log('path', fullPath.value);
        console.log('watch triggered');
        if(fullPath.value === '/about' || fullPath.value === '/fr/about'){
            background.value = 'background-blue';
        }else if(fullPath.value ==='/projects' || fullPath.value ==='/fr/projects'){
            background.value = 'background-red';
        }
        else if(fullPath.value ==='/contact' || fullPath.value ==='/fr/contact'){
            background.value = 'background-salmon';
        }else {
            background.value = 'background-beige';
        }
    }, { immediate: true });

</script>

<template>
    <div :class="background"  class="filter">
        <Navbar :background="background"/>
        <slot/>
    </div>
</template>

<style >
.background-beige{
    background-image: url('../assets/images/background_sand.jpg'), url('../assets/images/background_sand.jpg');
    background-color: var(--color-beige);
}
.background-red{
    background-image: url('../assets/images/background_sand.jpg'), url('../assets/images/background_sand.jpg');
    background-color: var(--color-red);
}
.background-blue{
    background-image: url('../assets/images/background_sand.jpg'), url('../assets/images/background_sand.jpg');
    background-color:var(--color-blue-about);
}
.background-salmon{
    background-image: url('../assets/images/background_sand.jpg'), url('../assets/images/background_sand.jpg');
    background-color:  var(--color-salmon);
}
</style>