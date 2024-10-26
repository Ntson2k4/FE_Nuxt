<!-- components/UserManagement.vue -->
<template>
    <div class="user-management" v-if="$auth.hasPermission('manage_users')">
      <h2>User Management</h2>
      <form @submit.prevent="addUser" class="user-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="newUser.username" id="username" required />
        </div>
        <div class="form-group">
          <label for="role">Role:</label>
          <select v-model="newUser.role" id="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" class="submit-button">Add User</button>
      </form>
  
      <h3>Current Users</h3>
      <ul class="user-list">
        <li v-for="user in users" :key="user.username" class="user-item">
          {{ user.username }} - {{ user.role }}
          <button @click="removeUser(user.username)" class="remove-button">Remove</button>
        </li>
      </ul>
    </div>
    
    <div v-else>
      <h2>You do not have permission to view this page.</h2>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const users = ref([
    { username: 'admin', role: 'admin' },
    { username: 'user', role: 'user' }
  ]);
  
  const newUser = ref({ username: '', role: 'user' });
  
  const addUser = () => {
    if (newUser.value.username && newUser.value.role) {
      users.value.push({ ...newUser.value });
      newUser.value.username = '';
      newUser.value.role = 'user';
    }
  }
  
  const removeUser = (username) => {
    users.value = users.value.filter(user => user.username !== username);
  }
  </script>
  
  <style scoped>
  .user-management {
    max-width: 600px; /* Đặt chiều rộng tối đa cho form */
    margin: 20px auto; /* Căn giữa form */
    padding: 20px;
    border: 1px solid #ccc; /* Viền cho form */
    border-radius: 8px; /* Bo góc cho form */
    background-color: #f9f9f9; /* Màu nền nhẹ */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Hiệu ứng bóng */
  }
  
  h2 {
    margin-bottom: 20px; /* Khoảng cách dưới tiêu đề */
  }
  
  .user-form {
    display: flex;
    flex-direction: column; /* Đặt các phần tử theo chiều dọc */
  }
  
  .form-group {
    margin-bottom: 15px; /* Khoảng cách giữa các nhóm */
  }
  
  label {
    margin-bottom: 5px; /* Khoảng cách dưới nhãn */
    font-weight: bold; /* Làm nổi bật nhãn */
  }
  
  input[type="text"],
  select {
    padding: 10px; /* Padding cho input và select */
    border: 1px solid #ccc; /* Viền cho input và select */
    border-radius: 4px; /* Bo góc cho input và select */
    font-size: 16px; /* Kích thước chữ */
  }
  
  .submit-button {
    padding: 10px; /* Padding cho nút submit */
    border: none; /* Không viền */
    border-radius: 4px; /* Bo góc cho nút */
    background-color: #28a745; /* Màu nền xanh lá cho nút */
    color: white; /* Màu chữ trắng */
    cursor: pointer; /* Hiệu ứng con trỏ khi di chuột */
    font-size: 16px; /* Kích thước chữ */
    transition: background-color 0.3s; /* Hiệu ứng chuyển màu */
  }
  
  .submit-button:hover {
    background-color: #218838; /* Màu nền khi di chuột */
  }
  
  .user-list {
    list-style: none; /* Bỏ dấu đầu dòng */
    padding: 0; /* Bỏ padding mặc định */
  }
  
  .user-item {
    display: flex; /* Sử dụng Flexbox để căn giữa nội dung */
    justify-content: space-between; /* Căn đều các mục */
    padding: 10px; /* Padding cho mỗi mục */
    border-bottom: 1px solid #ccc; /* Viền dưới cho mỗi mục */
  }
  
  .remove-button {
    background-color: #dc3545; /* Màu nền đỏ cho nút xóa */
    color: white; /* Màu chữ trắng */
    border: none; /* Không viền */
    border-radius: 4px; /* Bo góc cho nút */
    cursor: pointer; /* Hiệu ứng con trỏ khi di chuột */
  }
  
  .remove-button:hover {
    background-color: #c82333; /* Màu nền khi di chuột */
  }
  </style>
  