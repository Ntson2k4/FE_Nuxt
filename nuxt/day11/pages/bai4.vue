<template>
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <p v-if="error">Error fetching users: {{ error.message }}</p>
  
      <h2>Thêm Người Dùng Mới</h2>
      <form @submit.prevent="addUser">
        <label for="name">Tên:</label>
        <input v-model="newUser.name" type="text" id="name" required />
  
        <label for="email">Email:</label>
        <input v-model="newUser.email" type="email" id="email" required />
  
        <button type="submit">Thêm User</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAsyncData } from '#imports';
  
  const { data: users, error, refresh } = await useAsyncData('users', () =>
    $fetch('/api/users')
  );
  
  const newUser = ref({ name: '', email: '' });
  
  const addUser = async () => {
    try {
      await $fetch('/api/users', {
        method: 'POST',
        body: newUser.value,
      });
      newUser.value = { name: '', email: '' };
      await refresh();
    } catch (err) {
      console.error('Failed to add user:', err);
    }
  };
  
  if (error.value) {
    console.error('Error fetching users:', error.value);
  }
  </script>
  
  <style scoped>
  form {
    margin-top: 20px;
  }
  label, input {
    display: block;
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
  }
  </style>
  