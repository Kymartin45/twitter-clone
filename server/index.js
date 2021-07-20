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
function isValidPost(tweedle) {
    return tweedle.user && tweedle.user.toString().trim() !== '' &&
    tweedle.post && tweedle.post.toString().trim() !== ''
}

app.post('/tweedles', (req, res) => {
    console.log(req.body)
});

app.listen(5000, () => {
    console.log('Listening on :5000');
})