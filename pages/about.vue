<script setup>
     
</script>

<template>
    <main id="main">
        
        <div class="visible">
            
            <h1 class="about-title page">/{{ $t("about.title")}}</h1>
            
            <AboutCompletedTextField />
            
        </div>
        
    </main>   
</template>


<style scoped>
@media only screen and (max-width: 900px) {
    h1{
        text-align: center;  
    }
}

@media only screen and (max-width: 696px) {
h1{
    font-size: 48px;  
    
}

.about-title{
    padding-left:21px;
    mix-blend-mode: difference;
    
}
}

</style>
