<template>
    
    <div class="relative padding-left">
        <p class="absolute p0">{{$t("about.p0")}} </p>
        <p class="absolute p1">{{$t("about.p1")}}</p>
       <p class="absolute p2">{{$t("about.p2")}}</p>
       <p class="absolute p3">{{$t("about.p3")}}</p>
        <div class="photo absolute"></div>
        <div class="">
       <AboutTextfield class="text-field"/>
    </div>
           
    </div>
</template>

<style scoped>
p{
    color: var(--color-navbar-blue);
    font-family: Roundo;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 100; 
    margin-left: 46px;
    
    }
.p0{
    width: 775px; 
    margin-top: 32px;
    break-after: avoid;
    display: inline-block;
}    
.p1{
    width: 775px; 
    margin-top: 32px;
    top:65px;
    display: inline-block;
}

.p2{
    top:206px;
    width: 584px; 
    text-align: right;
    margin-left: 20px;
    
}
.p3{
    top:340px;
    width: 584px; 
}
.photo{
    width: 213px;
    height: 279px;
    border-radius: 20px;
    background: var(--color-blue) 50% / cover no-repeat;
    background-image: url("../../assets/images/subject_3.png");
    opacity: 0.8;
    top: 190px;
    left: 660px;
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
        width: 469px; 
        margin-top: 32px;
        top:10px;
    }  
    .p1{
        margin-top: 38px;
        width: 620px; 
        top: 130px;
    }
    .p2{
        top:280px;
        width: 620px; 
        text-align: left;
        margin-left: 12px;
    }
    .p3{
        width: 620px; 
        top:434px;
    }
    .photo{
        width: 147px;
        height: 192px; 
        left: 500px;
        top: -60px;
    }
    .padding-left{
        padding-left: 8px;;
    }
    
    }

@media only screen and (max-width: 696px) {
p{
    font-size: 18px; 
    margin-left: 12px;
   line-height: 1.4;
}
.p0{
    width: 140px; 
    margin-top: 32px;
    top:10px;
}  
.p1{
    margin-top: 38px;
    width: 313px; 
    top: 130px;
}
.p2{
    top:280px;
    width: 305px; 
    text-align: left;
    margin-left: 12px;
}
.p3{
    width: 305px; 
    top:434px;
}
.photo{
    width: 147px;
    height: 192px; 
    left: 178px;
    top: -60px;
}
.padding-left{
    padding-left: 8px;;
}
}

</style>

