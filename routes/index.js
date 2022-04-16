const router = require('express').Router();

module.exports = (app) => {
    const apiRouter = require('./api')(router);
    app.use('/api', apiRouter);
    app.get('/health', (req, res) => res.sendStatus(200));
}