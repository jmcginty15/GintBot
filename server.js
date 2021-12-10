const express = require('express');
const app = express();
const packageInfo = require('./package.json');
const PORT = process.env.PORT || 3001;
require('./bot');

app.get('/', (req, res) => {
    res.json({ version: packageInfo.version });
});

app.listen(PORT, () => {
    console.log(`Web server started on port ${PORT}`);
});
