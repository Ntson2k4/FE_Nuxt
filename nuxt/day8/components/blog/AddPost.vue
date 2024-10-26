<template>
  <div>
    <h2>Thêm Bài Viết</h2>
    <form @submit.prevent="submitPost">
      <input v-model="title" placeholder="Tiêu đề" required /><br>
      <textarea v-model="content" placeholder="Nội dung" required></textarea><br>
      <select v-model="selectedCategory" required>
        <option value="" disabled>Select a category</option>
        <option v-for="category in blogStore.categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select><br>
      <button type="submit">Thêm Bài Viết</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBlogStore } from '~/stores/blog';

const blogStore = useBlogStore();
const title = ref('');
const content = ref('');
const selectedCategory = ref('');

const submitPost = () => {
  blogStore.addPost({ title: title.value, content: content.value, category: selectedCategory.value });

  // Reset form fields after submission
  title.value = '';
  content.value = '';
  selectedCategory.value = '';
};
</script>
