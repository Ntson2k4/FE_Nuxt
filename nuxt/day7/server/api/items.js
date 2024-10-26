import modifyDataMiddleware from '../middleware/modifyData';

export default defineEventHandler(async (event) => {

    const data = await modifyDataMiddleware(event);

    return data;
});
