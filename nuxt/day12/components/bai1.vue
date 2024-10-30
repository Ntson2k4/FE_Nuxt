<template>
    <div>
      <h1>Hello, {{ name }}!</h1>
      <p v-if="age">You are {{ age }} years old.</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    age: Number,
  });
  </script>
  