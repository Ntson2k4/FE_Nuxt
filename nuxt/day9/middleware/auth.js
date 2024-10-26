// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useNuxtApp().$auth;

  if (!auth.isAuthenticated) {
    return navigateTo('/login');
  }

  // Kiểm tra quyền truy cập vào trang 'protected'
  if (to.path === '/protected' && !auth.hasPermission('view_protected')) {
    return navigateTo('/NotAuthorized'); // Chuyển đến trang không có quyền truy cập
  }
  if (to.path === '/user-management' && !auth.hasPermission('manage_users')) {
    return navigateTo('/NotAuthorized');
  }
});
