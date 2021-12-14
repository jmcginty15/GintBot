const express = require('express');
const app = express();
const packageInfo = require('./package.json');
const PORT = process.env.PORT || 3001;
const { bot, API_TOKEN } = require('./bot');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ version: packageInfo.version });
});

app.listen(PORT, () => {
    console.log(`Web server started on port ${PORT}`);
});
