<!-- B2 -->
<template>
    <div class="post-details">
      <h1>Post ID: {{ post.id }}</h1>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <NuxtLink to="/posts" class="back-link">Back to Posts</NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { useAsyncData } from '#app';
  
  const route = useRoute();
  const id = route.params.id;
  
  const { data: post } = await useAsyncData(`post-${id}`, () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
  );
  </script>
  
  <style scoped>
  .post-details {
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  
  .back-link {
    display: inline-block;
    margin-top: 30px;
    padding: 10px 20px;
    background-color: #008CBA;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
  .back-link:hover {
    background-color: #005f73;
  }
  </style>
  