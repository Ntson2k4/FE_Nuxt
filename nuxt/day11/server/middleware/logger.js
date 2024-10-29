export default defineEventHandler((event) => {
    const { method, url } = event.node.req;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${url}`);
});
