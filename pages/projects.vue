<template>
    <main>
        <div class="visible">
            <h1>/{{ $t("projects.title")}}</h1>
            <div class="grid">

            </div>
             
        </div>
        
    </main>
</template>



<style scoped>
.grid{
    display:grid;
}
@media only screen and (max-width: 672px) {
h1{
    font-size: 48px; 
    margin-top: 64px;
    text-align:center;    
  }

}
</style>