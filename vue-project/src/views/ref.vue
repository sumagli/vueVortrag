<script setup>
import { ref } from 'vue';
const msg = 'Not Changed';

const changeMsg = () => {
  msg = 'Changed';
}
</script>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <button @click="changeMsg">Click me</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
  font-family: sans-serif;
}

button {
  background-color: #42b883;
  color: #fff;
  border-radius: 200px;
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

h1 {
  color: #fff;
}
</style>
