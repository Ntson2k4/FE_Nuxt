export default defineEventHandler(async (event) => {
    // Xử lý yêu cầu API tại đây
    const { method, url } = event.req;
  
    if (method === 'POST' && url === '/api/posts') {
      const body = await readBody(event);
      // Lưu bài viết vào cơ sở dữ liệu hoặc xử lý theo yêu cầu
      return { message: 'Bài viết đã được thêm thành công' };
    }
  });
  