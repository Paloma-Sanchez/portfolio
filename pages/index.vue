<script setup>
const colorMode = useColorMode();

</script>

<template>
    <main >
       
        <div class="visible">
            <div class="filter"></div>
            <div class="filter"></div>
            <div class="banner"></div>
            <section>
                <h1>Paloma</h1>
                <h2>Sanchez</h2>
            </section>
            
            <section>
                <h3>{{ $t("home.title1")}} <br/> {{ $t("home.title2")}} <br/> {{ $t("home.title3")}}</h3>
            </section>
            <div>
                <div class="contacts">
                    <div class="green-circle"></div>
                    <p>{{ $t("home.availability")}}</p>
                </div>
                <div class="contacts">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mail-svg">
                        <g clip-path="url(#clip0_16_206)">
                            <path 
                                d="M20 4C21.0544 4 21.9182 4.81588 21.9945 5.85074L22 6V18C22 19.0544 21.1841 19.9182 20.1493 19.9945L20 
                                20H4C2.94564 20 2.08183 19.1841 2.00549 18.1493L2 18V17H4V18H20V7.41437L13.0607 14.3536C12.5116 14.9028 
                                11.6425 14.9371 11.0533 14.4566L10.9394 14.3536L4 7.41421V8H2V6C2 4.94564 2.81588 4.08183 3.85074 4.00549L4 
                                4H20ZM6 13C6.55228 13 7 13.4477 7 14C7 14.5523 6.55228 15 6 15H1C0.447715 15 0 14.5523 0 14C0 13.4477 0.447715 
                                13 1 13H6ZM18.5859 6H5.41421L12.0001 12.5859L18.5859 6ZM5 10C5.55228 10 6 10.4477 6 11C6 11.5128 5.61396 11.9355 
                                5.11662 11.9933L5 12H2C1.44772 12 1 11.5523 1 11C1 10.4871 1.38604 10.0645 1.88338 10.0067L2 10H5Z" 
                                fill="var(--color-blue)"
                            />
                        </g>
                        <defs>
                          <clipPath id="clip0_16_206">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                    </svg>
                    <p>karpaloma@hotmail.com</p>
                </div>
            </div>
        </div>
    </main>

    
</template>

<style scoped>
.visible{
    width: 1040px;
}

h1{
    color: var(--color-navbar-blue);
    font-family: Chonburi;
    font-size: 128px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    text-transform: uppercase;
    margin-bottom: -30px;
    position: relative;
    left: 64px;
}
h2{
    color: var(--color-navbar-blue);
    font-family: Chonburi;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    text-transform: uppercase;
    margin-top: 0px;
    z-index: 1000;
    position: relative;
}
h3{
    color: var(--color-navbar-blue);
    text-align: right;
    font-family: DM Serif Display;
    font-size: 64px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    padding-right: 15px;
}

.banner{
    display: flex;
    border-radius: 500px;
    background: rgba(228, 195, 125, 0.30);
    background-blend-mode: color-burn; 
    width: 5000px;
    height: 338px; 
    position:absolute;
    top:190px;
    right: 35%;
    z-index:0;
    flex-shrink: 1;
}
.green-circle{
    background-color: #20A40B; ;
    width: 20px;
    height: 20px; 
    border-radius: 20px;

}
.contacts{
    display: flex;
    align-items: center;
}
p{
    color: var(--color-navbar-blue);
    font-family: Roundo;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    margin: 0px;
    padding-left: 10px;
}



/* Break point 672px */
@media only screen and (max-width: 672px) {
h1{
    font-size: 60px;
    margin-top: 133px;
    margin-bottom: -20px;
}
h2{
    font-size: 48px; 
    margin-bottom: 122px;
}
h3{
    font-size: 36px;
    padding-right: 0;
    padding-bottom: 148px;
}
p{
    font-size: 20px; 
}
.banner{
    width: 1000px;
    height: 211px; 
    top:210px;
    right: 15%;
}
.contacts{
    justify-content: center;
}
}

/*ANIMATIONS*/
@keyframes mail-arrival {
    from {
      /* pushes the sun down past the viewport */
      transform: rotateZ(-45deg) ;
    }
    to {
      /* returns the sun to its default position */
      transform: rotateZ(0) ;
    }
  }


</style>