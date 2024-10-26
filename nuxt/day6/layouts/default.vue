<template>
  <div class="app-container">
    <header>
      <h1>My Application</h1>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <button @click="goBack">Go Back</button>
      </nav>
    </header>
    <main class="main-content">
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 My Application</p>
    </footer>
  </div>
</template>

<script setup>
const goBack = () => {
  window.history.back();
}
</script>

<style scoped>


header {
  background-color: #42b983;
  padding: 1rem;
  color: white;
  width: 100%; /* Chiều rộng 100% */
  text-align: center; /* Căn giữa văn bản trong header */
}

nav {
  margin-bottom: 1rem;
}

nav a {
  margin-right: 15px;
  color: white;
  text-decoration: none;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Căn giữa nội dung bên trong main */
  justify-content: center; /* Căn giữa nội dung theo chiều dọc */
  width: 100%; /* Chiều rộng 100% để chiếm toàn bộ không gian */
}

footer {
  margin-top: 2rem;
  text-align: center;
}
</style>
