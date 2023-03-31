const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const cors = require('cors');
require('dotenv').config();
// const routes = require('./routes');

//Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '250mb' }));
app.use(bodyParser.json({ limit: '250mb' }));
app.use(history());

// set up routes
require('./routes/users.routes')(app);

// start server
app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
