const express = require("express");

const Router = express.Router;
const apiRouter = Router();

apiRouter.get('/ping', (req, res) => {
    res.json('Pong!');
});

module.exports = apiRouter;