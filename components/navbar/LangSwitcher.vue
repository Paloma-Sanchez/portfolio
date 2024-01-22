<script setup>
    const {locales, locale, setLocale} = useI18n();
    const language = computed({
        get: () => locale.value,
        set: (value) => {
            setLocale(value);
        }
    })
    const props = defineProps({
        color:{
            type: String
        }
    })
    console.log(props.color)
</script>

<template>
    <div>
        <select v-model="language" :style="`color:${props.color};`">
            <option 
                v-for="locale in locales" 
                :key="locale.code"
                :value="locale.code"
                >{{locale.code.toUpperCase()}}</option>
        </select>
    </div>
</template>

<style scoped>
.custom-select {
    width: 65px;
    position: relative;
  }
  
  select {
    width: 65px;
    appearance: none;
    /* safari */
    -webkit-appearance: none;
    /* other styles for aesthetics */
    width: 100%;
    font-size: 18px;
    padding-right: 15px;
    padding-bottom: 7px;
    background-color: transparent;
    border: none;
    cursor: pointer;
   
  }
  .custom-select::before,
  .custom-select::after {
  --size: 0.3rem;
  position: absolute;
  content: "";
  right: 1rem;
  pointer-events: none;
}

.custom-select::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid #fff;
    top: 45%;
  }
</style>