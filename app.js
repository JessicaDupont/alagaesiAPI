require('dotenv').config();
var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT;

app.get('/', function(req, res){
  res.send('Hello World')
});

app.listen(port, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});