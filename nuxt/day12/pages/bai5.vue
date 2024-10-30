<template>
    <div class="homepage-content">
        <h1>Bài 5</h1>
        <p>Chào mừng bạn đến với bài 5!</p>
        
        <Suspense>
            <component :is="MyLazyComponent" />
        </Suspense>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const MyLazyComponent = defineAsyncComponent(() => import('@/components/Bai5Component.vue'));
</script>

<style scoped>
.homepage-content {
    text-align: center;
}
</style>
