<script setup>
const openMenu = ref(false);
const barColor = ref("#141E46");
const src = ref("");

const props = defineProps({
  background: {
    type: String,
    required: true,
  },
});
//console.log('nav', props.background);

watch([props, openMenu], () => {
  console.log("navWatch", props.background, openMenu.value);
  if (props.background === "background-beige" || openMenu.value) {
    barColor.value = "#141E46";
    //src.value = "../../assets/images/logo_dark.svg";
    //console.log('logo', src.value);
  } else {
    barColor.value = "#FFF5E0";
    //src.value = '../../assets/images/logo_white.svg';
    //console.log('logo', src.value);
  }
});
</script>

<template>
  <nav>
    <div class="container">
      <NuxtLink to="/" class="nav-right" @click="() => (openMenu = false)">
        <img
          src="../../assets/images/logo_dark.svg"
          v-if="props.background === 'background-beige'"
        />
        <img
          src="../../assets/images/logo_white.svg"
          v-if="props.background !== 'background-beige'"
        />
      </NuxtLink>

      <div class="nav-right">
        <div class="nav-widget">
          <button class="nav-btn" :style="{ color: barColor }">EN</button>
          <button class="nav-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.94 4.485C8.31 12.025 13.69 16.895 17.6 18.285C16.21 19.375 14.48 19.995 12.67 19.995C8.26 
                        19.995 4.67 16.405 4.67 11.995C4.67 8.545 6.87 5.595 9.94 4.485ZM12.66 2.005C7.07 2.005 2.67 6.535 2.67 
                        11.995C2.67 17.515 7.15 21.995 12.67 21.995C16.38 21.995 19.6 19.975 21.33 16.975C13.82 16.725 9.24 8.545 13.01 2.005H12.66Z"
                :fill="`${barColor}`"
              />
            </svg>
          </button>
        </div>
        <NavbarBurguer
          @click="() => (openMenu = !openMenu)"
          class="burguer"
          :color="barColor"
        />
      </div>
    </div>
  </nav>
  <div class="nav-menu" v-show="openMenu">
    <NavbarMenu @closeMenu="() => (openMenu = !openMenu)" />
  </div>
</template>

<style>
/*** TRANSITIONS ***/
.slide-left-enter-active {
  transition: all 0.27s linear;
}
.slide-left-from {
  transform: translateX(100%);
}
</style>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  height: 120px;
  align-items: center;
  width: 100%;
  z-index: 2002;
  position: relative;
}

.container {
  width: 1040px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-right {
  display: flex;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
}
.nav-widget {
  display: flex;
  align-items: center;
  width: 85px;
  justify-content: space-between;
  padding-right: 58px;
}
.nav-btn {
  background: transparent;
  border: none;
  font-family: Rounded Mplus 1c;
  font-size: 22px;
  padding: 0;
  cursor: pointer;
}

.burguer {
  cursor: pointer;
}
.nav-menu {
  position: fixed;
  inset: 0;
  background: rgba(255, 245, 224, 0.7);
  backdrop-filter: blur(20px);
  z-index: 2000;
  animation: mymove linear 0.5s;
}

/*** TRANSITIONS ***/
@keyframes mymove {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
