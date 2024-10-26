<template>
  <li>
    <router-link :to="`/blog/posts/${post.id}`">{{ post.title }}</router-link>
    <button @click="deletePost">Xóa</button>
    <router-link :to="`/blog/posts/edit/${post.id}`">Sửa</router-link>
  </li>
</template>

<script setup>
const props = defineProps(['post']);
const emit = defineEmits(['deletePost']);

const deletePost = () => {
  emit('deletePost', props.post.id);
};
</script>
