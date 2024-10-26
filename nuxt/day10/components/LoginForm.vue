<template>
  <div v-if="!$auth.isAuthenticated"> <!-- Hide form when authenticated -->
    <h2>Đăng nhập</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Tên đăng nhập:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
    <div v-if="error" style="color: red;">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref('');
const { $auth } = useNuxtApp();
const router = useRouter();

const login = () => {
  // Logic xác thực ví dụ
  if (username.value === 'admin' && password.value === '1') {
    $auth.login({ username: username.value, role: 'admin', permissions: ['view_image'] });
    router.push('/image'); // Chuyển hướng đến trang được bảo vệ
  } else if (username.value === 'user' && password.value === '1') {
    $auth.login({ username: username.value, role: 'user', permissions: [] });
    router.push('/'); // Chuyển hướng đến trang chính
  } else {
    error.value = 'Tên đăng nhập hoặc mật khẩu không hợp lệ'; // Hiển thị thông báo lỗi
  }
}
</script>
