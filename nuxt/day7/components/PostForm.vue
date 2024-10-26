<template>
  <form @submit.prevent="submitPost">
    <input v-model="title" placeholder="Tiêu đề bài viết" required /><br>
    <textarea v-model="content" placeholder="Nội dung bài viết" required></textarea> <br>
    <button type="submit">Thêm Bài Viết</button>
    <p v-if="message">{{ message }}</p>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const content = ref('');
const message = ref('');
const errorMessage = ref('');

const submitPost = async () => {
  message.value = '';
  errorMessage.value = '';

  const newPost = { title: title.value, content: content.value };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    });

    if (response.ok) {
      const result = await response.json();
      message.value = 'Bài viết đã được thêm thành công!';
      title.value = '';
      content.value = '';
    } else {
      throw new Error('Không thể thêm bài viết. Vui lòng thử lại.');
    }
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>
