<script setup>

import { ref } from 'vue'
const count = ref(0)

</script>
<template>
    <button @click="count++">Cuenta: {{ count }}</button>
</template>

<script scoped>
</script>