// Create web server and listen to port 3000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(req.body);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server using node comments.js
// Open Postman and send a POST request to http://localhost:3000/comments with a JSON body
// Open Postman and send a GET request to http://localhost:3000/comments to see the comments