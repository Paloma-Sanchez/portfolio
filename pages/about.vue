<script setup>
     
</script>

<template>
    <main id="main">
        <div class="filter"></div>  
        <div class="visible">
            <div class="filter"></div>
            <h1 class="about-title">/About</h1>
            <div class="center">
                <AboutCompletedTextField />
            </div>
        </div>
        
    </main>   
</template>

<style>


h1{
    color: #FFF5E0;
    text-align: left;
    font-family: Chonburi;
    font-size: 128px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    position: relative;
    z-index: 1;
    
}
</style>

<style scoped>



@media only screen and (max-width: 672px) {
h1{
    font-size: 48px;  
    
}

.about-title{
    padding-left:21px;
    
}
}

</style>
