<script setup>
    const {locales, locale} = useI18n;
</script>

<template>
    <select>
        <option 
            v-for="locale in locales" 
            :key="locale.code"
            :value="locale.code">{{locale.code}}</option>
    </select>
</template>