<!-- B1 -->
<template>
  <div class="counter-container">
    <h1>Counter: {{ counter.count }}</h1>
    <div class="button-group">
      <button @click="decrement" class="btn">-</button>
      <button @click="increment" class="btn">+</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();

const increment = () => {
  counter.increment();
};

const decrement = () => {
  counter.decrement();
};
</script>
