<template>
    <div>
        <main>
            <div class="visible">
                <h1 class="page">/{{ $t("contact.title")}}</h1>
                <p>{{ $t("contact.p")}}</p>
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
    font-weight: 400;
    text-align: center;  
}
.email{
    padding-top: 56px;
}
/*REACTIVE 830px*/
@media only screen and (max-width: 830px) {
    h1{
        font-size: 105px; 
        margin-top: 64px;
        text-align:center;    
      }
}

/*REACTIVE 696px*/
@media only screen and (max-width: 696px) {
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