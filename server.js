const app = require('./app');
const debug = require('debug')('getir');
const mongoose = require('mongoose');

require('dotenv').config()

mongoose
    .connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        retryWrites: true,
    })
    .then(() => debug('Connected to DB'))

// mongoose.set('debug', true);
mongoose.connection.on('error', err =>
    debug('Failed to connect to mongo db via mongoose: %o', err.message)
)

const serverPort = process.env.PORT || 3021;
app.listen(serverPort, () => debug('App running on %o', serverPort));