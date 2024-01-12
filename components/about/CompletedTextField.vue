<script setup>
/*<div>
    
</div>
<div>
    
</div>*/
</script>
<template>
    <div class="relative">
        <p class="absolute p1">I'm a freelance front-end developper from Nantes, <br/> France. In 2016 I graduated from the National Institue of <br/>
            Applied Sciences (INSA) in Lyon and got my Engineering Degree in Mechanics.</p>
       <p class="absolute p2">
           After 6 years working in the fields of luxury goods and automobiles, I decided to follow my passion and become a web developer.
       </p>
       <p class="absolute p3">
            After finishing Codecademy's Front-End development course and several months of practicing what I had learned, I started freelancing  in December 2023.
        </p>
        <div class="photo absolute"></div>
       <AboutTextfield/>
    </div>
   
</template>

<style scoped>
p{
    color: #141E46;
    font-family: Roundo;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 100; 
    margin-left: 46px;
    }

.p1{
    width: 775px; 
    margin-top: 32px;
}

.p2{
    top:190px;
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
    background: #14225B 50% / cover no-repeat;
    background-image: url("../../assets/images/subject_3.png");
    mix-blend-mode: lighten; 
    top: 190px;
    left: 660px;
    z-index: 10; 
}
</style>

