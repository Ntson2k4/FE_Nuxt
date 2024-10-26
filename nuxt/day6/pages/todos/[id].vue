<template>
    <div v-if="todo">
      <h2>{{ todo.title }}</h2>
      <p>ID: {{ todo.id }}</p>
      <p>Description: {{ todo.description }}</p>
    </div>
    <div v-else>
      <p>To-Do not found.</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { todos } from '@/data/todos.js';
  
  const route = useRoute();
  const todoId = Number(route.params.id);
  
  console.log('Todo ID:', todoId);
  
  const todo = todos.find(t => t.id === todoId);
  console.log('Todo:', todo);
  </script>
  
  <style scoped>
  h2 {
    color: #42b983;
  }
  </style>
  