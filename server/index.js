// Nodemon added for real-time server changes 
// Cors prevents cors error
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Parses incoming requests

app.get('/', (req, res) => {
    res.json({
        message: 'Yo this is a test'
    });
});

// Checks to see if user & post content is typed
// Will have to do string validation for this?
function checkPost(tweedle) {
    return tweedle.name && tweedle.name + "" !== "" &&
    tweedle.content && tweedle.content + "" !== "";
}

app.post('/tweedles', (req, res) => {
    if(!checkPost(req.body)) {
        res.status(422)
        res.json({
            message: 'Please type name and post'
        });
    }
    const {name, content} = req.body;
    const timestamp = new Date().getDay;
    const tweedle = {name, content, timestamp}; 

    console.log(tweedle);
    // if (checkPost(req.body)) {
    //     const tweedle = {
    //         name: req.body.name + "",
    //         content: req.body.content + "",
    //         timestamp: new Date()
    //     };
    //     console.log(tweedle);
    // } 
});

app.listen(5000, () => {
    console.log('Listening on :5000');
})