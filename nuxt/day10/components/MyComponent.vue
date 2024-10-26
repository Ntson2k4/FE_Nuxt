<template>
    <div>
      <h1>This is my lazy loaded component!</h1>
      <h2>Image Gallery</h2>
      <div class="gallery">
        <NuxtImg
          v-for="image in images"
          :key="image.id"
          :src="image.src"
          :alt="image.alt"
          width="300"
          height="200"
          loading="lazy"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Khai báo biến để lưu danh sách hình ảnh
  const images = ref([]);
  
  // Lấy danh sách hình ảnh từ API
  async function fetchImages() {
    const response = await fetch('/api/images');
    images.value = await response.json();
  }
  
  // Gọi hàm fetchImages khi component được mounted
  onMounted(() => {
    fetchImages();
  });
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Thay đổi khoảng cách giữa các ảnh */
  }
  </style>
  