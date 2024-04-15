<script setup>
  import ToDoItem from '../components/AufgabeComponent/ToDoItem.vue'
  import { ref } from 'vue'
  const anzeigen = false;
</script>


<template>
  <div class="todo-container">
    <h1 class="title">ToDo-Liste</h1>  
    <ul class="todo">
      <ToDoItem todo="Einkaufen" />
      <ToDoItem todo="Aufräumen" />
      <ToDoItem todo="Kochen" />
    </ul>
  </div>
</template>
