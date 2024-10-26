<template>
  <div>
    <h1>Welcome</h1>
    <!-- Hiển thị thông tin người dùng nếu đã đăng nhập -->
    <p v-if="$auth.isAuthenticated && $auth.user">
      You are logged in as {{ $auth.user.username }} <!-- Giả sử user là một object với thuộc tính username -->
    </p>
    <p v-else>
      You are not logged in. Please login.
    </p>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { useRouter } from 'vue-router'

const { $auth } = useNuxtApp()
const router = useRouter()

// Kiểm tra trạng thái đăng nhập ngay lập tức
if (!$auth.isAuthenticated) {
  router.push('/login')
} else {
  // Log thông tin $auth để kiểm tra
  console.log('Authenticated user:', $auth.user);
}
</script>
