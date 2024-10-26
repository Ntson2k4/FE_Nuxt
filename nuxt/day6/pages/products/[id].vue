<template>
    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <p>ID: {{ product.id }}</p>
      <p>Description: {{ product.description }}</p>
    </div>
    <div v-else>
      <p>Product not found.</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { products } from '@/data/products.js';
  
  const route = useRoute()
  const productId = Number(route.params.id)
  
  const product = products.find(p => p.id === productId)
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  