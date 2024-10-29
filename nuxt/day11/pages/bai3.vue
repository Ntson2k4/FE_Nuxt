<template>
    <div>
      <h1>{{ posts ? posts.length : 0 }} Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
      <p v-if="error">Error fetching posts: {{ error.message }}</p>
    </div>
  </template>
  
  <script setup>
  const { data: posts, error } = await useAsyncData('posts', () =>
    $fetch('/api/posts')
  );

  if (error.value) {
    console.error('Error fetching posts:', error.value);
  }
  </script>
  