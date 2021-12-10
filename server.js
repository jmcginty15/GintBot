const express = require('express');
const app = express();
const packageInfo = require('./package.json');
require('./bot');

app.get('/', (req, res) => {
    res.json({ version: packageInfo.version });
});

app.listen(3001, () => {
    console.log(`Web server started on port ${3001}`);
});
