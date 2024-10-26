<!-- pages/user-management.vue -->
<template>
    <UserManagement />
  </template>
  
  <script setup>
  import UserManagement from '@/components/UserManagement.vue'
  definePageMeta({
    middleware: 'auth'
  });
  </script>
  