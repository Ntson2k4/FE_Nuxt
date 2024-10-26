<template>
    <div>
        <h2>Posts</h2>
        <div v-if="pending">Loading...</div>
        <div v-if="error">{{ error.message }}</div>
        <ul v-if="data">
            <li v-for="post in data" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useAsyncData } from '#app';

const { data, pending, error } = await useAsyncData('post', () =>
    fetch('http://jsonplaceholder.typicode.com/posts').then(res => res.json())
);
</script>