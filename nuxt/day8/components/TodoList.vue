<!-- B4 -->
<template>
    <div>
      <h2>Danh sách Nhiệm vụ</h2>
      <input v-model="newTask" placeholder="Nhập nhiệm vụ mới" />
      <button @click="addNewTask">Thêm Nhiệm vụ</button>
      <ul>
        <li v-for="task in taskStore.tasks" :key="task.id">
          {{ task.title }}
          <button @click="editTask(task)">Sửa</button>
          <button @click="deleteTask(task.id)">Xóa</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useTaskStore } from '~/stores/tasks';
  
  const taskStore = useTaskStore();
  const newTask = ref('');
  
  const addNewTask = () => {
    if (newTask.value.trim()) {
      const task = {
        id: Date.now(),
        title: newTask.value
      };
      taskStore.addTask(task);
      newTask.value = '';
    }
  };
  
  const editTask = (task) => {
    const updatedTitle = prompt('Cập nhật tiêu đề nhiệm vụ:', task.title);
    if (updatedTitle) {
      taskStore.updateTask(task.id, { title: updatedTitle });
    }
  };
  
  const deleteTask = (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này?')) {
      taskStore.deleteTask(id);
    }
  };
  </script>
  
  <style scoped>
  input {
    margin-bottom: 10px;
  }
  button {
    margin-left: 5px;
  }
  </style>
  