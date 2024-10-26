export default defineEventHandler(async (event) => {
    if (event.req.url === '/api/items') {
      const staticData = [
        { id: 1, name: 'Item 1', description: 'Description for Item 1' },
        { id: 2, name: 'Item 2', description: 'Description for Item 2' },
      ];
  
      const modifiedData = staticData.map(item => ({
        ...item,
        additionalInfo: 'This is additional info for ' + item.name,
      }));
  
      return modifiedData;
    }
  
    return;
  });
  