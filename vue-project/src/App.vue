<script setup>
import ToDoItem from './components/ToDoItem.vue'
import { ref } from 'vue'

const msg = 'Statische ToDo-Liste in Vue.js'
const showToDos = ref(true)
const todos = ref(['Einkaufen', 'Aufräumen', 'Lernen'])

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div class="container">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="250" height="250" />
    <h1 class="title">{{ msg }}</h1>
    <button @click="showToDos = !showToDos">{{ showToDos ? 'Verberge' : 'Zeige' }} ToDos</button>
  </div>
  <div v-show="showToDos" class="todo-container">
    <ul class="todo">
      <ToDoItem v-for="todo in todos" :key="todo" :todo="todo" @remove-todo="removeTodo(todo)" />
    </ul>
  </div>
  <RouterView />
</template>

<style scoped>
.container {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 40px;
}

.logo {
  display: block;
}

.title {
  font-size: 3rem;
  text-align: center;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.todo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
  font-size: 24px;
  width: 600px;
}

button {
  cursor: pointer;
}
</style>
