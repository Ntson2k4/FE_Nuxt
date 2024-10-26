<template>
  <div>
    <h2>Danh Sách Bài Viết</h2>
    <ul>
      <PostItem v-for="post in posts" :key="post.id" :post="post" @deletePost="deletePost" />
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useBlogStore } from '~/stores/blog';
import PostItem from './PostItem.vue';

const blogStore = useBlogStore();

const posts = computed(() => blogStore.posts);

const deletePost = (id) => {
  console.log('Xóa bài viết với ID:', id);
  blogStore.deletePost(id);
  console.log('Danh sách bài viết hiện tại:', blogStore.posts);
};
</script>
