<template>
  <div v-if="!$auth.isAuthenticated"> <!-- Ẩn form login khi đã đăng nhập -->
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="error" style="color: red;">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const { $auth } = useNuxtApp()
const router = useRouter()

const login = () => {
  if (username.value === 'admin' && password.value === '1') {
    $auth.login({ username: username.value, role: 'admin', permissions: ['manage_users', 'view_protected'] });
    router.push('/protected');
  } else if (username.value === 'user' && password.value === '1') {
    $auth.login({ username: username.value, role: 'user', permissions: [] });
    router.push('/');
  } else {
    error.value = 'Invalid username or password';
  }
}
</script>
