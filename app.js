//Données d'envirronnement
require('dotenv').config();

//ExpressJS
const express = require('express');
const app = express();

//Connexion à la DB
const dbConnection = require("./models/database/connect2db");
dbConnection.connect();

//json / html
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routing
const router = require('./routers/router');
app.use(router);
// app.all('*', (req, res) =>{res.status(404).json({message : "url incorrecte"})})

//serveur
const hostname = process.env.HOST || process.env.HOST_LOCAL;
const port = process.env.PORT || process.env.PORT_LOCAL;

app.listen(port, ()=>{
  if(process.env.CONSOLE_LOG){
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Server running at http://${hostname}:${port}/api/${process.env.VERSION_API}/`);
  }
});