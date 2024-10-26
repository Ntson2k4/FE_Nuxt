<template>
  <div>
    <h2>Welcome to My Nuxt.js 3 App</h2>
    <p>This is the main page of the application.</p>
    <!-- b3 -->
    <h3>Products</h3>
    <ul>
      <li>
        <NuxtLink to="/products/1">Product 1</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products/2">Product 2</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products/3">Product 3</NuxtLink>
      </li>
    </ul>
    <!-- b4 -->
    <nav>
      <ul>
        <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
        <li><nuxt-link to="/profile">Profile</nuxt-link></li>
        <li><nuxt-link to="/settings">Settings</nuxt-link></li>
      </ul>
    </nav>
    <!-- b5 -->
    <h2>To-Do List</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <NuxtLink :to="'/todos/' + todo.id">{{ todo.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { todos } from '@/data/todos.js';
</script>

<style scoped>
h2 {
  color: #42b983;
}

p {
  font-size: 18px;
  color: #333;
}
</style>