<template>
    <div>
     
    <main>
        <div class="filter"></div> 
        <div class="visible">
            <div class="filter"></div>
            <h1>/Get in touch</h1>
            <p >Want to work together on a project?</p>
            <p class="email"><strong>Email:</strong>  </p>
            <p class="email-body"> karpaloma@hotmail.com</p>
        </div>
    </main>
    </div>
</template>



<style scoped>

.grid{
    display:grid;
}
p{
    color: #FFF;
    font-family: Roundo;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    text-align: center;  
}
.email{
    padding-top: 56px;
   
}
@media only screen and (max-width: 672px) {
    h1{
        font-size: 48px; 
        margin-top: 64px;
        text-align:center;    
      }
    p{
        font-size: 32px; 
        margin-top: 105px;
    }
.email{
    padding-top:0 ;
    text-align: start;
    margin-bottom: 0;
}
.email-body{
    font-size: 24px;
    margin-top: 0;
}
}

</style>