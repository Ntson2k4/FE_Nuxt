<template>
    <div>
        <h2>Bài 2</h2> <hr>
        <div v-if="error">
            <p>Error loading posts: {{ error.message }}</p>
        </div>
        <div v-else-if="!data">
            <p>Loading...</p>
        </div>
        <ul v-else>
            <li v-for="post in data" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.content }}</p>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useFetch } from '#app';
const { data, error } = await useFetch('/api/data');

</script>
<style scoped>
/* CSS cho trang posts-api */
h1 {
    color: #333;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 1rem;
}

h2 {
    margin: 0;
}
</style>