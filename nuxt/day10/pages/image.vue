<template>
  <div>
    <h1>Chào mừng bạn đến với ứng dụng Nuxt.js của tôi</h1>
    <button @click="loadComponent">Tải MyComponent</button>
    <div v-if="isComponentLoaded">
      <Suspense>
        <component :is="MyComponent" />
      </Suspense>
    </div>
    <div v-else-if="$auth.isAuthenticated">
      <p>Component đã được tải. Bạn có thể nhấn nút trên để tải lại.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent, watch } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const { $auth } = useNuxtApp();
const router = useRouter();
const MyComponent = defineAsyncComponent(() => import('@/components/MyComponent.vue'));
const isComponentLoaded = ref(false);

// Kiểm tra trạng thái xác thực ban đầu
checkAuthentication();

// Hàm tải component
function loadComponent() {
  isComponentLoaded.value = true;
}

// Hàm kiểm tra trạng thái xác thực
function checkAuthentication() {
  if (!$auth.isAuthenticated) {
    router.push('/login'); // Chuyển hướng đến trang đăng nhập nếu chưa xác thực
  } else {
    console.log('Người dùng đã xác thực:', $auth.user);
  }
}
definePageMeta({
  middleware: 'auth' // Sử dụng middleware
});
</script>
