const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const router = express.Router();

router.get('/', (req, res) => {
    res.send('App is running');
});

router.post('/notifications', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.status(200).send(JSON.stringify(req.body));
});

app.use('/', router);

app.listen(5000, () => {
    console.log('App is running');
});

module.exports = app;
