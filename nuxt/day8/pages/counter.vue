<template>
    <div>
      <h2>Counter Page</h2>
      <CounterDisplay />
      <CounterReset />
    </div>
  </template>
  
  <script setup>
  import CounterDisplay from '~/components/CounterDisplay.vue';
  import CounterReset from '~/components/CounterReset.vue';
  </script>
  
  