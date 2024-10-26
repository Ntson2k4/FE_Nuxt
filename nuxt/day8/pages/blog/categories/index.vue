<template>
    <div>
      <h2>Danh Mục Bài Viết</h2>
      <ul>
        <li v-for="category in categories" :key="category">
          <router-link :to="`/blog/categories/${category}`">{{ category }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useBlogStore } from '~/stores/blog';
  
  const blogStore = useBlogStore();
  const categories = blogStore.categories;
  </script>
  