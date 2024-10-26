<template>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
      <p><strong>Danh mục:</strong> {{ post.category }}</p>
      <router-link to="/blog/posts">Quay lại</router-link><br>
      <router-link :to="`/blog/posts/edit/${post.id}`">Sửa Bài Viết</router-link>
    </div>
    <div v-else>
      <p>Không tìm thấy bài viết.</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { useBlogStore } from '~/stores/blog';
  
  const route = useRoute();
  const blogStore = useBlogStore();
  const post = blogStore.getPostById(Number(route.params.id));
  </script>
  