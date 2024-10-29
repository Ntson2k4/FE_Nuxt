let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

export default defineEventHandler(async (event) => {
    if (event.req.method === 'GET') {
        return users;
    } else if (event.req.method === 'POST') {
        const body = await readBody(event);
        const newUser = {
            id: users.length + 1,
            name: body.name,
            email: body.email,
        };
        users.push(newUser);

        return newUser;
    }
});
