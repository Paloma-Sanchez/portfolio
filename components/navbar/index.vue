<script setup>
    import LogoDark from '../../assets/svg/logo_dark.svg';
    import LogoLight from '../../assets/svg/logo_white.svg';
    import Moon from '../../assets/svg/moon.svg';
    import Sun from '../../assets/svg/sun.svg'
    const openMenu = ref(false);
    const barColor = ref("#141E46");
    const moonVisible = ref('');
    const localPath = useLocalePath();

    const props = defineProps({
    background: {
        type: String,
        required: true,
    },
    });
    
    /*Choose navbar colors*/
    watch([props, openMenu], () => {
    console.log("navWatch", props.background);
    if (props.background === "background-beige" || openMenu.value) {
        barColor.value = "var(--color-navbar-blue)";
    } else {
        barColor.value = "var(--color-navbar-beige)";

    }
    }, { immediate: true });

    /*Color mode Nuxt*/
    const colorMode = useColorMode();

    onMounted(() => {
      if(colorMode.preference === "light"){
        moonVisible.value = true;
      } else{
        moonVisible.value = false;
      } 
    });

    /*Toggle color mode*/
    const handleOnClickColorMode = () => {
      if(colorMode.preference === "light"){
        colorMode.preference = "dark";
        moonVisible.value = false;
      } else{
        colorMode.preference = "light";
        moonVisible.value = true;
      } 
    }

    /*Open Menu*/
    const handleOnClickOpenMenu = () => {
      const line1 = document.getElementById("navline1");
      const line2 = document.getElementById("navline2");
      const line3 = document.getElementById("navline3");

      openMenu.value = !openMenu.value;
      line1.classList.toggle('a');
      line2.classList.toggle('b');
      line3.classList.toggle('c');
    }

    /**/
</script>

<template>
  <nav>
    <div class="container">
      <NuxtLink :to="localPath('/')" class="nav-right" @click="openMenu? handleOnClickOpenMenu() :''">
        <template v-if="(props.background === 'background-beige' && colorMode.preference !== 'dark') || (openMenu && colorMode.preference !== 'dark') ">
          <LogoDark class="logo" />  
        </template>
        <template v-else>
          <LogoLight class="logo" />
        </template>
      </NuxtLink>

      <div class="nav-right">
        <div class="nav-widget">
          <NavbarLangSwitcher :color="barColor"/>
          <button class="nav-btn" @click="handleOnClickColorMode">
            <template v-if="moonVisible">
                <Moon class="color-mode-svg" :style="`fill:${barColor}`"/>
            </template>
            <template v-else>
                <Sun class="color-mode-svg2"/>
            </template>
          </button>
        </div>
        <NavbarBurguer
          @click="handleOnClickOpenMenu"
          class="burguer"
          :color="barColor"
        />
      </div>
    </div>
  </nav>
  <div class="nav-menu" v-show="openMenu">
    <NavbarMenu @closeMenu="handleOnClickOpenMenu" />
  </div>
</template>

<style>
.color-mode-svg2 {
  width: 24px; 
  height: 24px; 
  path{
    fill: var(--color-navbar-beige);
    }
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
.logo{
  width:46px;
  height:38px;
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
.color-mode-svg{
  width: 24px; 
  height: 24px; 
}
.color-mode-svg2{
  width: 24px; 
  height: 24px; 
}

.nav-btn {
  background: transparent;
  border: none;
  font-family: "M PLUS Rounded 1c";
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
  background: var(--color-menu-bg);
  backdrop-filter: blur(20px);
  z-index: 2000;
  animation: mymove linear 0.5s;
  overflow: scroll;
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
