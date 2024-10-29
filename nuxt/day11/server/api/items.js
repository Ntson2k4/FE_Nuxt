import { readBody } from 'h3';

let items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
];

export default defineEventHandler(async (event) => {
  const { req } = event;

  if (req.method === 'GET') {
    return items;
  }

  if (req.method === 'POST') {
    const body = await readBody(event);
    const newItem = { id: items.length + 1, ...body };
    items.push(newItem);
    return newItem;
  }

  if (req.method === 'DELETE') {
    const body = await readBody(event);
    items = items.filter((item) => item.id !== body.id);
    return { success: true };
  }
});
