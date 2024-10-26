<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li v-if="$auth.isAuthenticated">
        <NuxtLink to="/image">Image</NuxtLink>
      </li>
      <li v-if="$auth.isAuthenticated">
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const { $auth } = useNuxtApp();
const router = useRouter();

const logout = () => {
  $auth.logout();
  router.push('/login');
}
</script>

<style scoped>
nav {
  background: #333;
  color: white;
  padding: 10px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

li {
  flex: 1;
  text-align: center;
}

a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px;
}

button {
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
