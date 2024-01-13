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
body{
  margin: 0;
}

@media only screen and (max-width: 672px) {
  .visible{
    max-width: 350px;
  }
 
}

/***TRANSITIONS***/
.page-enter-active {
  transition: all 0.27s linear;
  
}
.page-enter-from {
  transform: translateX(-100%);
}

.page-leave-to {
  transform: translateX(100%);
}

.page-leave-active {
  transition: all 0.5s linear;
  
}

</style>