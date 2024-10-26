<!-- B3 -->
<template>
    <div>
      <h2>Danh mục Bài viết</h2>
      <ul>
        <li v-for="category in categories" :key="category">
          <NuxtLink :to="`/categories/${category}`">{{ category }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useBlogStore } from '~/stores/blog';
  
  const blogStore = useBlogStore();
  const categories = blogStore.categories;
  </script>
  