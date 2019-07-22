// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
// const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'src')));

// Set our api routes
//app.use('/api', api);
app.get('/announcements', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/blog.html'));
});
app.get('/why', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/why.html'));
});
app.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/resources.html'));
});
app.get('/faqs', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/faqs.html'));
});
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '1337';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
