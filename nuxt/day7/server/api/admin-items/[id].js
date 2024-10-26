let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];
  
  export default defineEventHandler(async (event) => {
    const method = event.node.req.method;
    const id = event.context.params.id; // Lấy ID từ URL
  
    // Xử lý yêu cầu DELETE (xóa mục)
    if (method === 'DELETE') {
      items = items.filter(item => item.id != id);
      return { message: 'Item deleted' };
    }
  
    // Xử lý yêu cầu PUT (cập nhật mục)
    if (method === 'PUT') {
      const body = await readBody(event);
      const index = items.findIndex(item => item.id == id);
      if (index !== -1) {
        items[index].name = body.name;
        return items[index];
      }
      return { error: 'Item not found' };
    }
  
    return { error: 'Method not allowed' };
  });
  