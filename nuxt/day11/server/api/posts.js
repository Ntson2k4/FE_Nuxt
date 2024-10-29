let cachedPosts = null;

export default defineEventHandler(async (event) => {
    if (cachedPosts) {
        return cachedPosts;
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw createError({ statusCode: response.status, statusMessage: 'Fetch failed' });
    }

    cachedPosts = await response.json();
    return cachedPosts;
});
