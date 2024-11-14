<script setup>

import { ref } from 'vue'

const text = ref('')

</script>

<template>
    <div>
        <input v-model="text" placeholder="Escribe Aquí">
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>

</style>