<template>
    <div>
      <h1>Danh sách Người dùng</h1>
      <ul v-if="users">
        <li v-for="user in users" :key="user.id">
          <strong>{{ user.name }}</strong> - {{ user.email }}
        </li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script setup>
  const { data: users, pending, error } = await useAsyncData('publicData', () =>
    $fetch('/api/publicData') 
  );
  </script>
  