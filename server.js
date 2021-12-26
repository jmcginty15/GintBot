const express = require('express');
const app = express();
const packageInfo = require('./package.json');
const PORT = process.env.PORT || 3001;
// const { bot, API_TOKEN } = require('./bot');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ version: packageInfo.version });
});

// app.post(`/${API_TOKEN}`, (req, res) => {
//     bot.processUpdate(req.body);
//     res.sendStatus(200);
// });

app.listen(PORT, () => {
    console.log(`Web server started on port ${PORT}`);
});
