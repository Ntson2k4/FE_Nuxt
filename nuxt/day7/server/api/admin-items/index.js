let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  // Xử lý yêu cầu GET (lấy danh sách)
  if (method === 'GET') {
    return items;
  }

  // Xử lý yêu cầu POST (thêm mục mới)
  if (method === 'POST') {
    const body = await readBody(event);
    const newItem = { id: Date.now(), name: body.name };
    items.push(newItem);
    return newItem;
  }

  return { error: 'Method not allowed' };
});
