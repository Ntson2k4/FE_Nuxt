<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/bai1">Bài 1</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/bai3">Bài 3</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/bai4">Bài 4</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/bai5">Bài 5</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { useRouter } from 'vue-router'

const { $auth } = useNuxtApp()
const router = useRouter()

</script>

<style scoped>
nav {
    background: #333;
    color: white;
    padding: 10px;
}

ul {
    list-style: none;
    display: flex;
    /* Sử dụng Flexbox */
    justify-content: space-between;
    /* Căn đều các mục */
    padding: 0;
    /* Bỏ padding mặc định */
    margin: 0;
    /* Bỏ margin mặc định */
}

li {
    flex: 1;
    /* Các mục có kích thước bằng nhau */
    text-align: center;
    /* Căn giữa nội dung trong mỗi mục */
}

a {
    color: white;
    text-decoration: none;
    display: block;
    /* Để toàn bộ khu vực của liên kết có thể nhấp */
    padding: 10px;
    /* Khoảng cách cho liên kết */
}

button {
    background-color: transparent;
    /* Nền trong suốt */
    color: white;
    /* Màu chữ trắng */
    border: none;
    /* Không có viền */
    padding: 10px;
    /* Padding cho nút */
    cursor: pointer;
    /* Hiệu ứng con trỏ khi di chuột */
    transition: background-color 0.3s;
    /* Hiệu ứng chuyển màu */
}

button:hover {
    background-color: rgba(255, 255, 255, 0.1);
    /* Màu nền khi di chuột (tuỳ chọn) */
}
</style>