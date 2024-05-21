const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Route handler for serving the login page
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log(req.headers);
  next();
});

// Route handler for serving the loggedin page
app.get('/loggedin', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'loggedin.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
