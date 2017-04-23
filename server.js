var express = require('express');
var morgan = require('morgan');
var path = require('path');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
  console.log(path.resolve('public', 'index.html'));
});


app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
