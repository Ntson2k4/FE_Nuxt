<!-- B1 -->
<template>
    <button @click="reset">Reset</button>
  </template>
  
  <script setup>
  import { useCounterStore } from '~/stores/counter';
  
  const counter = useCounterStore();
  
  const reset = () => {
    counter.$reset();
  };
  </script>
  