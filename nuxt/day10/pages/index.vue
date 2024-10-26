<!-- pages/index -->
<template>
  <div>
    <h1>Welcome</h1>
    <p v-if="$auth.isAuthenticated && $auth.user">
      You are logged in as {{ $auth.user.username }}
    </p>
    <p v-else>
      You are not logged in. Please login.
    </p>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const { $auth } = useNuxtApp();
const router = useRouter();

if (!$auth.isAuthenticated) {
  router.push('/login');
} else {
  console.log('Authenticated user:', $auth.user);
}
</script>
