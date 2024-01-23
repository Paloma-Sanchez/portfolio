<template>
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style>
main{
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
}
.visible{
  width: 1040px;
}

.relative{
  position: relative;
}
.absolute{
  position: absolute;
}


.filter{


}

@media only screen and (max-width: 696px) {
  .visible{
    max-width: 350px;
  }
}


/***PAGE TRANSITIONS***/
.page-enter-active {
  transition: opacity 1s ease-in-out, transform 0.6s linear;
  
}
.page-enter-from {
  opacity: 0;
  transform: translateX(-100%);
  
}

.page-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.page-leave-active {
  transition: opacity 0.2s ease-in, transform 0.5s linear;
}


</style>