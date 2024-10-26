export default defineEventHandler(async (event) => {
  const cacheControlHeader = {
    'Cache-Control': 'public, max-age=3600', // Caching trong 1 giờ
  };

  // Gửi header caching
  event.res.setHeader('Cache-Control', cacheControlHeader['Cache-Control']);

  return [
    { id: 1, src: '/images/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/images/image1.jpg', alt: 'Image 2' },
    { id: 3, src: '/images/image2.jpg', alt: 'Image 3' },
    { id: 4, src: '/images/image2.jpg', alt: 'Image 4' },
  ];
});
