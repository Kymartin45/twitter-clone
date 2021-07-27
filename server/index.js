// Nodemon added for real-time server changes 
// Cors prevents cors error
const express = require('express');
const cors = require('cors');
const monk = require('monk');
const { response } = require('express');

const app = express();

const db = monk('localhost:8080/tweeter'); 
const validTweedle = db.get('tweedles');

app.use(cors());
app.use(express.json()); // Parses incoming requests

app.get('/', (req, res) => {
    res.send(`<h1>GET request testing</h2>
    <p>Tweeter - The Twitter Clone</p>`)
});

function isValidTweedle(tweedle) {
    return tweedle.name && tweedle.name + "" !== "" &&
    tweedle.content && tweedle.content + "" !== "";
};

app.post('/tweedles', (req, res) => {
    if(!isValidTweedle(req.body)) {
        res.status(422);
        res.json({
            message: 'Please type name and post'
        });
    }
    const {name, content} = req.body;
    const timestamp = new Date();
    const tweedle = {name, content, timestamp}; 

    const postObj = Object.entries(tweedle);
    const postObjString = JSON.stringify(postObj);
    console.log(postObjString);

    validTweedle.insert(postObj).then(createdTweedle => {
        res.json(createdTweedle);
    });
});

app.listen(5000, () => {
    console.log('Listening on :5000');
});