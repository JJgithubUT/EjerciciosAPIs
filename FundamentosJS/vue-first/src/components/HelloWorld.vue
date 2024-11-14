<script setup>
import { ref } from 'vue'

const message = ref('Hola TIADSM')

const titleClass = ref('title')


</script>

<template>
    <h1 :class="titleClass">{{ message }}</h1>
</template>

<style scoped>

.title {
    color: red;
}

</style>
