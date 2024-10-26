// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useNuxtApp().$auth;

  // Kiểm tra xác thực
  if (!auth.isAuthenticated) {
    return navigateTo('/login'); // Điều hướng đến trang đăng nhập
  }

  // Kiểm tra quyền truy cập
  if (to.path === '/image' && !auth.hasPermission('view_image')) {
    return navigateTo('/NotAuthorized'); // Điều hướng đến trang không được phép
  }
});
