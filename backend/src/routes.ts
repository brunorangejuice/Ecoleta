import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json([
        1,
        2,
        3,
        4
    ]);
});

export default routes;