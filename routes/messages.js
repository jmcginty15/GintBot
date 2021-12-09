const express = require('express');
const client = require('../client');
// const DatingUser = require('../models/datingUser');

const ExpressError = require('../expressError');

const router = new express.Router();

router.get('/', async function (req, res, next) {
    try {
        return res.json(req.body);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;