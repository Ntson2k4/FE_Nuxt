<!-- B2 -->
<template>
    <div class="post-list">
      <h2>Post List</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useAsyncData } from '#app';
  
  const { data: posts } = await useAsyncData('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  );
  </script>
  
  <style scoped>
  .post-list {
    padding: 20px;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  
  a {
    color: #008CBA;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  