<template>
    <div>
      <h1>Items with Additional Info</h1>
      <div v-if="error">
        <p>Error loading items: {{ error.message }}</p>
      </div>
      <div v-else-if="!data">
        <p>Loading...</p>
      </div>
      <ul v-else>
        <li v-for="item in data" :key="item.id">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <p><strong>{{ item.additionalInfo }}</strong></p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useFetch } from '#app';
  
  // Gọi API 'items' và lấy dữ liệu
  const { data, error } = await useFetch('/api/items');
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 1rem;
  }
  
  h2 {
    margin: 0;
  }
  </style>
  