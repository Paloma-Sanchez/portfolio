<script setup>
    const route = useRoute();
    const fullPath = computed(() => route.fullPath);
    
    const background = ref('background-beige');
    //const body =  document.body;
    //console.log('body', body);
    //document.body.className = '';
    /* Choose backgorund color */
    watch(fullPath, () => {
        console.log('path', fullPath.value);
        console.log('watch triggered');

        //element.setAttribute("class", "")
        if(fullPath.value === '/about' || fullPath.value === '/fr/about'){
            background.value = 'background-blue';
            useHead({
                bodyAttrs: {
                    'data-color': 'blue' 
                }
            })
        }else if(fullPath.value ==='/projects' || fullPath.value ==='/fr/projects'){
            background.value = 'background-red';
            useHead({
                bodyAttrs: {
                    'data-color': 'red' 
                }
            })
        }
        else if(fullPath.value ==='/contact' || fullPath.value ==='/fr/contact'){
            background.value = 'background-salmon';
            useHead({
                bodyAttrs: {
                    'data-color': 'salmon' 
                }
            })
        }else {
            background.value = 'background-beige';
            useHead({
                bodyAttrs: {
                    'data-color': 'beige' 
                }
            })
        }
    }, { immediate: true });

</script>

<template>
    <div :class="background"  class="filter">
        <Navbar :background="background"/>
        <slot/>
    </div>
</template>

<style>
body[data-color]{
    background-blend-mode: multiply;
}

body[data-color="beige"]{
    background-image: url('../assets/images/background_sand.jpg'), url('../assets/images/background_sand.jpg');
    background-color: var(--color-beige);
}

body[data-color="red"]{
    background-image: url('../assets/images/background_sand.jpg'), url('../assets/images/background_sand.jpg');
    background-color: var(--color-red);
}
body[data-color="blue"]{
    background-image: url('../assets/images/background_sand.jpg'), url('../assets/images/background_sand.jpg');
    background-color:var(--color-blue-about);
}
body[data-color="salmon"]{
    background-image: url('../assets/images/background_sand.jpg'), url('../assets/images/background_sand.jpg');
    background-color:  var(--color-salmon);
}
</style>