<!-- B3 -->
<template>
    <div>
      <h1>Bài viết trong Danh mục</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/categories/${categoryId}/${post.id}`">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useAsyncData } from '#app';
  
  const route = useRoute();
  const categoryId = route.params.categoryId;
  
  const { data } = await useAsyncData('posts', () =>
    $fetch('/api/api')
  );
  
  const posts = data.value.posts[categoryId] || [];
  </script>
  