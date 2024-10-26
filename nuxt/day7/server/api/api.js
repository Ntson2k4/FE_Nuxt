const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default defineEventHandler(async (event) => {
  const { method } = event.node.req;

  if (method === 'GET') {
    const response = await $fetch(API_URL);
    return response;
  }

  if (method === 'POST') {
    const newPost = await readBody(event);
    
    // Giả lập việc lưu bài viết mới (thực tế không lưu vào API công cộng)
    const createdPost = {
      id: Math.floor(Math.random() * 1000), // Giả lập ID
      title: newPost.title,
      body: newPost.body,
    };
    
    return { message: 'Post created', data: createdPost }; // Trả về thông tin bài viết mới
  }
});
