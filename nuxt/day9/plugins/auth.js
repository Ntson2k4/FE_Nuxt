// plugins/auth.js
import { defineNuxtPlugin } from '#app'
import { reactive } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const auth = reactive({
    isAuthenticated: false,
    user: null,
    role: null, 
    permissions: [],
    login(user) {
      this.isAuthenticated = true;
      this.user = user;
      this.role = user.role;
      this.permissions = user.permissions || []; // Thêm quyền vào đối tượng người dùng
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.role = null;
      this.permissions = [];
    },
    hasPermission(permission) {
      return this.permissions.includes(permission); // Kiểm tra quyền của người dùng
    }
  });

  nuxtApp.provide('auth', auth);
});
