import express from "express";

const Router = express.Router;
const apiRouter = Router();

apiRouter.get('/ping', (req, res) => {
    res.json('Pong!');
});

export default apiRouter;