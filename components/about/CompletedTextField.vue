<template>
    <div class="relative padding-left">
        <p class="absolute p0">I'm a freelance front-end developper from Nantes,  France. In 2016 I </p>
        <p class="absolute p1"> graduated from the National Institue of 
            Applied Sciences (INSA) in Lyon and got my Engineering Degree in Mechanics.</p>
       <p class="absolute p2">
           After 6 years working in the fields of luxury goods and automobiles, I decided to follow my passion and become a web developer.
       </p>
       <p class="absolute p3">
            After finishing Codecademy's Front-End development course and several months of practicing what I had learned, I started freelancing  in December 2023.
        </p>
        <div class="photo absolute"></div>
       <AboutTextfield class="text-field"/>
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
    
    top: 190px;
    left: 660px;
    z-index: 30; 
}

.text-field{
    z-index: 0;
    position: relative;
}

@media only screen and (max-width: 672px) {
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
    top:291px;
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

