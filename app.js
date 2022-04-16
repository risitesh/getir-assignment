const express = require('express');
const bodyParser = require('body-parser');

const logger = require('morgan');

require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).send('Route Not Found');
    next();
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    const statusCode = err.status || 500;
    let { message } = err;
    if (process.env.NODE_ENV === 'production') {
        if (statusCode === 500) {
            message = 'Internal Server Error';
        }
    }
    return res.status(statusCode).send({ message });
});

module.exports = app;
