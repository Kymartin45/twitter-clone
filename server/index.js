// Nodemon added for real-time server changes 
// Cors prevents cors error
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Parses incoming requests

app.get('/', (req, res) => {
    res.json({
        message: 'Tweedlelee'
    });
});

// Checks to see if user & post content is typed
// Will have to do string validation for this?

app.post('/tweedles', (req, res) => {
    // console.log(req.body)
        const tweedle = {
            name: req.body.name,
            content: req.body.content,
            timestamp: new Date()
        };
        console.log(tweedle);
    });

app.listen(5000, () => {
    console.log('Listening on :5000');
})