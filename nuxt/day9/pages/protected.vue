<template>
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected and requires authentication.</p>
    </div>
  </template>
  
  <script setup>
definePageMeta({
  middleware: 'auth' // Sử dụng middleware
});
  </script>
  