<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/counter">Bài 1</NuxtLink>
        <NuxtLink to="/posts">Bài 2</NuxtLink>
        <NuxtLink to="/categories">Bài 3</NuxtLink>
        <NuxtLink to="/tasks">Bài 4</NuxtLink>
        <NuxtLink to="/blog/posts">Bài 5</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 My Application</p>
    </footer>
  </div>
</template>

<style scoped>
/* Flexbox layout */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 2rem;
}

header {
  background-color: #333;
  padding: 1rem;
  text-align: left;
}

header nav {
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  z-index: 10;
}

header nav a,
header nav NuxtLink {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

header nav a:hover,
header nav NuxtLink:hover {
  color: #ffcc00;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>