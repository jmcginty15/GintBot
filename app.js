const express = require('express');
const cors = require('cors');
const client = require('./client');
const WEBHOOK_TOKEN = require('randomstring').generate(16);
client.setWebhook(`https://gint-bot.herokuapp.com/${WEBHOOK_TOKEN}`);
// client.setWebhook(`https://192.168.1.104:3001/${WEBHOOK_TOKEN}`);
const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'https://flexchess.surge.sh');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

const ExpressError = require('./expressError');
const messageRoutes = require('./routes/messages');

app.use('/', messageRoutes);

/** 404 handler */

app.use(function (req, res, next) {
    const err = new ExpressError('Not Found', 404);
    return next(err);
});


/** general error handler */

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

module.exports = app;
