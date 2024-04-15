
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
