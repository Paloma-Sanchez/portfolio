<script setup>
import EmailIcon from "../../assets/svg/email_icon.svg";
const colorMode = useColorMode();
</script>

<template>
  <main>
    <div class="visible">
      <div class="banner"></div>
      <section>
        <h1>Paloma</h1>
        <h2>Sanchez</h2>
      </section>

      <section>
        <h3>
          {{ $t("home.title1") }} <br />
          {{ $t("home.title2") }} <br />
          {{ $t("home.title3") }}
        </h3>
      </section>
      <div>
        <div class="contacts">
          <div class="green-circle"></div>
          <p>{{ $t("home.availability") }}</p>
        </div>
        <div class="contacts">
          <EmailIcon class="svg" />
          <p>karpaloma@hotmail.com</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  color: var(--color-navbar-blue);
  font-family: Chonburi;
  font-size: 128px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 0px;
  margin-top: 165px;
  position: relative;
  left: 64px;
  line-height: 60px;
  transition: font-size 0.3s ease-out;
}
h2 {
  color: var(--color-navbar-blue);
  font-family: Chonburi;
  font-size: 96px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 0px;
  z-index: 1000;
  position: relative;
  transition: font-size 0.25s ease-out;
}
h3 {
  color: var(--color-navbar-blue);
  text-align: right;
  font-family: "DM Serif Display";
  font-size: 64px;
  font-style: italic;
  font-weight: 400;
  padding-right: 15px;
  transition: all 0.25s ease-in;
}

.banner {
  border-radius: 500px;
  background: var(--color-banner-beige);
  background-blend-mode: color-burn;
  width: 5000px;
  height: 338px;
  position: absolute;
  top: 190px;
  right: 35%;
  z-index: 0;
  flex-shrink: 1;
}
.green-circle {
  background-color: #20a40b;
  width: 20px;
  height: 20px;
  border-radius: 20px;
}
.contacts {
  display: flex;
  align-items: center;
}
p {
  color: var(--color-navbar-blue);
  font-family: Roundo;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px;
  padding-left: 10px;
}
.svg {
  width: 24px;
  height: 24px;
}

/* Reactive break point width 696px */
@media only screen and (max-width: 696px) {
  h1 {
    font-size: 60px;
    margin-top: 133px;
    margin-bottom: -20px;
  }
  h2 {
    font-size: 48px;
    margin-bottom: 112px;
  }
  h3 {
    font-size: 36px;
    padding-right: 0;
    padding-bottom: 75px;
  }
  p {
    font-size: 20px;
  }
  .banner {
    width: 1000px;
    height: 211px;
    top: 210px;
    right: 15%;
  }
  .contacts {
    justify-content: center;
  }
}
/* Reactive break point width 696px */
@media only screen and (max-height: 925px) and (min-width: 696px) {
  .banner {
    top: 170px;
    height: 300px;
  }
  h1 {
    font-size: 96px;
    margin-top: 100px;
  }
  h2 {
    font-size: 76px;
    margin-bottom: 100px;
  }
  h3 {
    font-size: 50px;
    padding-right: 0;
    padding-bottom: 50px;
  }
}

@media only screen and (max-height: 925px) and (min-width: 696px) {
  .banner {
    top: 130px;
  }
  h1 {
    font-size: 105px;
    margin-top: 60px;
  }
  h2 {
    font-size: 76px;
    margin-bottom: 80px;
  }
  h3 {
    font-size: 48px;
    padding-right: 0;
    padding-bottom: 30px;
  }
}

/*ANIMATIONS*/
@keyframes mail-arrival {
  from {
    /* pushes the sun down past the viewport */
    transform: rotateZ(-45deg);
  }
  to {
    /* returns the sun to its default position */
    transform: rotateZ(0);
  }
}
</style>
