require('dotenv').config();
var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || process.env.PORT_LOCAL;

const router = require('./routers/router');
app.use(router);

app.listen(port, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});