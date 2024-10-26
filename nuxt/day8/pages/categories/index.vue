<!-- B3 -->
<template>
    <div>
      <h1>Danh sách Danh mục Bài viết</h1>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <nuxt-link :to="`/categories/${category.id}`">{{ category.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useAsyncData } from '#app';
  
  const { data } = await useAsyncData('categories', () =>
    $fetch('/api/api')
  );
  const categories = data.value.categories;
  </script>