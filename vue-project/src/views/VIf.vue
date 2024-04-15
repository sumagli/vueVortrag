<script setup>
import ToDoItem from '@/components/AufgabeComponent/ToDoItem.vue'
import { ref } from 'vue'
const msg = 'ToDo-Liste in Vue.js'
const showToDos = ref(true)
</script>

<template>
  <div class="wrapper">
    <div class="page-container">
      <div class="container">
        <img src="@/assets/logo.svg" alt="Vue logo" class="logo" width="250" height="250" />
        <h1 class="title">{{ msg }}</h1>
        <button @click="showToDos = !showToDos">Toggle ToDos</button>
      </div>
      <div class="todo-container">
        <ul>
          <ToDoItem todo="Einkaufen" />
          <ToDoItem todo="Kochen" />
          <ToDoItem todo="Lernen" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin: 0;
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

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
}

.page-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.title {
  color: #fff;
  font-family: sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
