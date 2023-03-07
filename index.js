const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const router = express.Router();

router.get('/', (req, res) => {
    res.send('App is running');
});

router.post('/notifications', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.status(200).send(JSON.stringify(req.body));
});

app.listen(5000, () => {
    console.log('App is running');
});

module.exports = app;
