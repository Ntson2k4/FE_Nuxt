import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [
      { id: 1, title: 'Bài viết 1', content: 'Nội dung 1', category: 'Công nghệ' },
      { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2', category: 'Thể thao' },
    ],
    categories: ['Công nghệ', 'Thể thao', 'Sức khỏe', 'Giải trí'],
  }),
  actions: {
    addPost(newPost) {
      this.posts.push({ id: this.posts.length + 1, ...newPost });
    },
    updatePost(updatedPost) {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost;
      }
    },
    deletePost(id) {
      console.log('Xóa bài viết ID:', id);
      this.posts = this.posts.filter(post => post.id !== id);
      console.log('Danh sách bài viết sau khi xóa:', this.posts);
    },
    getPostById(id) {
      return this.posts.find(post => post.id === id);
    },
  },
});
