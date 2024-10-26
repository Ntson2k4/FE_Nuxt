<!-- B3 -->
<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
      <nuxt-link to="/categories">Trở lại danh sách danh mục</nuxt-link>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useAsyncData } from '#app';
  
  const route = useRoute();
  const categoryId = route.params.categoryId;
  const postId = route.params.postId;
  
  const { data } = await useAsyncData('posts', () =>
    $fetch('/api/api')
  );
  
  const post = data.value.posts[categoryId]?.find(p => p.id == postId);
  </script>
  