<script setup>
const props = defineProps({
  todo: String
})

const emit = defineEmits(['remove-todo'])
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
}

button {
  background-color: red;
  color: #fff;
  border-radius: 200px;
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

li {
  color: #fff;
  font-family: sans-serif;
  font-size: 20px;
}
</style>
