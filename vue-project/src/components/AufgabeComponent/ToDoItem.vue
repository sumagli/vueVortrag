<script setup>
const props = defineProps({
  todo: String
})
</script>

<template>
  <div class="todo-item-container">
    <li>{{ props.todo }}</li>
  </div>
</template>

<style scoped>
.todo-item-container {
  border: 2px solid #42b883;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.todo-item-container li {
  list-style-type: none; 
}
</style>
