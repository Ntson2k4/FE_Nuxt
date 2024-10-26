<template>
    <div>
      <h2>Sửa Bài Viết</h2>
      <form @submit.prevent="submitPost">
        <input v-model="title" placeholder="Tiêu đề" required /><br>
        <textarea v-model="content" placeholder="Nội dung" required></textarea><br>
        <select v-model="selectedCategory" required>
          <option value="" disabled>Select a category</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select><br>
        <button type="submit">Cập nhật Bài Viết</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useBlogStore } from '~/stores/blog';
  
  const blogStore = useBlogStore();
  const route = useRoute();
  const router = useRouter();
  
  const title = ref('');
  const content = ref('');
  const selectedCategory = ref('');
  
  const categories = blogStore.categories;
  
  onMounted(() => {
    const post = blogStore.getPostById(Number(route.params.id));
    title.value = post.title;
    content.value = post.content;
    selectedCategory.value = post.category;
  });
  
  const submitPost = () => {
    blogStore.updatePost({ id: Number(route.params.id), title: title.value, content: content.value, category: selectedCategory.value });
    router.push('/blog/posts');
  };
  </script>
  