<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref({});

const fetchPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
  post.value = await response.json();
};

onMounted(fetchPost);
</script>
