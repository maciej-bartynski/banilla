const express = require('express');
const app = express();
require('./services/passportConfig');
let googleAuthRoute = require('./routes/googleAuthRoute');
let homeRoute = require('./routes/homeRoute');
googleAuthRoute(app);
homeRoute(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);