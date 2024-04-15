<script setup>
const props = defineProps({
  todo: String
})

const emit = defineEmits(['remove-todo'])
</script>

<template>
  <div class="todo-item-container">
    <li>{{ props.todo }}</li>
    <button @click="$emit('remove-todo', props.todo)">Entfernen</button>
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
}

button {
  cursor: pointer;
}
</style>
