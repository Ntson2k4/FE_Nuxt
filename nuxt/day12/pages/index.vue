<template>
    <div class="homepage-content">
        <h1>Trang Chủ</h1>
        <p>Chào mừng bạn đến với trang chủ!</p>

        <Suspense>
            <template #default>
                <component :is="MyLazyComponent" />
            </template>
            <template #fallback>
                <p>Đang tải component...</p>
            </template>
        </Suspense>

    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const MyLazyComponent = defineAsyncComponent(() => import('@/components/MyLazyComponent.vue'));
</script>

<style scoped>
.homepage-content {
    text-align: center;
}
</style>
