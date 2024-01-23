<template>
    
    <div class="relative padding-left center">
        <p class="absolute p0">{{$t("about.p0")}} </p>
        <p class="absolute p1">{{$t("about.p1")}}</p>
       <p class="absolute p2">{{$t("about.p2")}}</p>
       <p class="absolute p3">{{$t("about.p3")}}</p>
       <div class="photo absolute"></div>
    </div> 
       
        <div class="">
       <AboutTextfield class="text-field"/>
    
           
    </div>
</template>

<style scoped>
p{
    color: var(--color-navbar-blue);
    font-family: Roundo;
    font-size: 26px;
    font-weight: 400;
    z-index: 100; 
}
.p0{
    width: 775px; 
    margin-top: 32px;
    break-after: avoid;
    display: inline-block;
    margin-left: 46px;
}    
.p1{
    width: 775px; 
    margin-top: 32px;
    top:65px;
    display: inline-block;
    margin-left: 46px;
}
.p2{
    width: 580px; 
    top:190px;
    padding-right: 145px;
}
.p3{
    top:340px;
    width: 584px;
    padding-right: 145px;
}
/*760px;*/
.photo{
    width: 213px;
    height: 279px;
    border-radius: 20px;
    background: var(--color-blue) 50% / cover no-repeat;
    background-image: url("../../assets/images/subject_3.png");
    opacity: 0.8;
    top: 215px;
    margin-left: 700px;
    z-index: 30; 
}

.center{
        display: flex;
        justify-content: center;
    }

@media only screen and (max-width: 900px) {
    p{
        font-size: 24px; 
        margin-left: 12px;
        line-height: 1.4;
        padding-left: 10px;
        
    }
    .p0{
        width: 449px; 
        margin-top: 32px;
        top:10px;
        padding-right: 167px;
        margin-left: 12px;
    }  
    .p1{
        margin-top: 38px;
        width: 620px; 
        top: 130px;
        margin-left: 12px;
    }
    .p2{
        top:280px;
        width: 620px; 
        text-align: left;
        margin-left: 12px;
        padding-right: 0px;
    }
    .p3{
        width: 620px; 
        top:434px;
        padding-right: 0px;
    }
    .photo{
        width: 147px;
        height: 192px; 
        margin-right: 200px;
        top: -60px;
    }
    .padding-left{
        padding-left: 8px;;
    }
    
    }

@media only screen and (max-width: 696px) {
p{
    font-size: 18px; 
    margin-left: 0px;
   line-height: 1.4;
}
.p0{
    width: 140px; 
    margin-top: 20px;
    top:10px;
    margin-right: 10px;
}  
.p1{
    margin-top: 42px;
    width: 300px; 
    top: 130px;
    padding-right: 16px;
}
.p2{
    top:284px;
    width: 300px; 
    text-align: left;
    margin-left: 12px;
    margin-left: 0px;
}
.p3{
    width: 300px; 
    top:434px;
    margin-left: 12px;
    margin-left: 0px;
}
.photo{
    width: 147px;
    height: 192px; 
    margin-right: 530px;
    top: -40px;
}
.padding-left{
    padding-left: 8px;;
}
}

</style>

