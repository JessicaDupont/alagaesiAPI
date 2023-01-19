# Étapes d'un projet
1. [Création du projet](#création-du-projet)
    1. [Installations](#installations)
    2. [Création](#création-du-projet-en-nodejs)
    3. [Initialisation](#initialisation)
        1. [.env](#paquet-env)
        2. [Nodemon](#paquet-nodemon)
    4. [ExpressJS](#mise-en-place-de-expressjs)
    5. [Swagger](#swagger)
    6. [Git](#initialisation-git)
2. [Structure](#structure)
    1. [Database](#database)
    2. [Json / HTML](#jsonhtml)
    3. [Routers](#routers)
3. [Module oeuvres](#module-oeuvres)
---
---
# Création du projet
* [Installations](#installations)
* [Création](#création-du-projet-en-nodejs)
* [Initialisation](#initialisation)
    * [.env](#paquet-env)
    * [Nodemon](#paquet-nodemon)
* [ExpressJS](#mise-en-place-de-expressjs)
* [Git](#initialisation-git)
## Installations
1. npm est-il déjà installé ?
    1. Ouvrir l'invite de commande
        1. `Windows`+`r`
        2. `cmd`
    2. `npm -v` : pour vérifier la version. 
    > Si le terminal retourne un message d'erreur, npm n'est pas installé. Voir [Installation de npm](#installation-de-npm).
    3. *(optionnel)* `npm install npm -g` : pour mettre à jour npm vers la dernière version.
2. NodeJS est-il déjà installé ?
    1. Ouvrir l'invite de commande
        1. `Windows`+`r`
        2. `cmd`
    2. `node -v` : pour vérifier la version
    > Si le terminal retourne un message d'erreur, nodeJS n'est pas installé. Voir [Installation de node](#installation-de-nodejs).
    3. *(optionnel)* `n latest` : pour mettre à jour sur la dernière version.
3. L'installation d'ExpressJS se fait **après** la création initiale du projet.
### Installation de npm
>Pour installer npm, le plus simple est d'installer NodeJS. Voir [Installation de NodeJS](#installation-de-nodejs).
### Installation de NodeJS
1. Télécharger la version LTS sur [nodejs.org](https://nodejs.org/fr/).
2. Exécuter le fichier téléchargé. Suivre les étapes d'installation.
3. *(optionnel)* Ouvrir VS Code 
> Il est important d'ouvrir VS Code (ou de le fermer et le réouvrir) **après** l'installation. Cela permet a VS Code de prendre en compte les nouvelles modifications.
4. Vérifier que l'installation s'est bien passée en suivant les [étapes précécentes](#installations)
## Création du projet en NodeJS
1. Localiser le projet
    1. Ouvrir l'invite de commande
        1. `Windows`+`r`
        2. `cmd`
    2. Naviguer des les dossiers jusqu'à arriver au chemin souhaité
        * `cd nomDossier` : entrer dans le dossier *nomDossier*
        * `cd ..` : remonter dans le dossier parent
        * `dir` : liste des dossiers contenus
2. `mkdir alagaesiAPI` : créer un dossier *alagaesiAPI* qui contiendra le projet
3. `cd alagaesiAPI`
4. `type nul > app.js` : crée le fichier *app.js*
5. `npm init` : crée le fichier *package.json*
    1. *package name : (alagaesiapi)* `enter`
    2. *version: (1.0.0)* `enter`
    3. *description:* `enter` ou entrer un texte
    4. *entry point: (app.js)* `enter`
    5. *test command*: `enter`
    6. *git repository: * `https://github.com/JessicaDupont/alagaesiAPI.git`(créé préalablement sur Github) + `enter`
    7. *keywords:* `enter`
    8. *author:* `Jessica Dupont`+`enter`
    9. *license: (ISC)* `enter`
    10. *[...] Is this OK? (yes)* `enter`
6. `node app.js` : lance l'application
7. `ctrl`+`c` : arrete l'exécution de l'application
> actuellement vide, rien ne s'affiche
8. fermer l'invite de commande
## Initialisation
1. Ouvrir VS Code
2. Ouvrir le fichier *app.js*
3. Mettre le code suivant dans le fichier *app.js*
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
4. test de *Hello Worls*
    1. `ctrl`+`ù` : ouvrir le terminal
    2. `node app.js` : exécute l'application
    3. `ctrl` + clic sur le lien en console.
    > la page web affiche *Hello World*
    4. `ctrl`+`c` : stop l'exécution
### Paquet .env
Doc : [www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
1. `ctrl`+`ù` : ouvrir le terminal
2. `npm i dotenv --save`
    * dossier ajouté : *node_modules/dotenv*
    * fichier ajouté : *.env* (ou à ajouter manuellement)
    * fichier ajouté : *package-lock.json*
    * fichier modifié : *package.json*
3. utilisation:
    1. *.env* : `PORT_LOCAL="3000"`
    2. *app.js* (import): `require('dotenv').config();`
    3. *app.js* (utilisation): `process.env.PORT_LOCAL`
### Paquet Nodemon
Doc : [www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
1. `ctrl`+`ù` : ouvrir le terminal
2. `npm i -g nodemon`
3. `nodemon` : exécute l'application et la met à jour après chaque enregistrement. (remplace `node app.js`)
## Mise en place de ExpressJS
1. `ctrl`+`ù` : ouvrir le terminal
2. `npm i --save express`
3. rempalcer le code de *app.js*
```js
require('dotenv').config();
var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || process.env.PORT_LOCAL;

app.get('/', function(req, res){
  res.send('Hello World')
});

app.listen(port, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
4. `nodemon` pour exécuter l'application et vérifier que tout va toujours bien
## Swagger
1. `npm i swagger-ui-express`
    * modification de *package-lock.json*
    * modification de *package.json*
2. `npm i yamljs`
    * modification de *package-lock.json*
    * modification de *package.json*
3. dans *app.js* mettre le code suivant vers la fin du document
```js
const swaggerUi = require("swagger-ui-express")
const yaml = require("yamljs")
const swaggerDocument = yaml.load("./swagger.yml")
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
```
## Initialisation Git
1. fichier *.gitignore*
    1. créer le fichier *.gitignore*
    2. copier/coller le contenu de [github/gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore) dans le fichier créé précédement.
2. utiliser git via Github Desktop
# Structure
* [Database](#database)
* [Json / HTML](#jsonhtml)
* [Routers](#routers)
1. Créer dossier *controllers*
2. Créer dossier *models*
3. Créer dossier *middlewares*
4. Créer dossier *sql*
## Database
### MySQL
> pour un travail en local, il est nécessaire d'avoir installer un serveur virtuel tel que [Xampp](https://www.apachefriends.org/fr/index.html).
1. `ctrl`+`ù` : ouvrir le terminal
2. `npm i promise-mysql`
3. Dans *.env*, mettre les données de la database. le fichier devrait ressembler à ceci:
```c
# global
VERSION_API="v1"
# local
HOST_LOCAL="127.0.0.1"
PORT_LOCAL="3000"
DB_HOST_LOCAL=""
DB_USER_LOCAL=""
DB_PASSWORD_LOCAL=""
DB_PORT_LOCAL=""
DB_NAME_LOCAL=""
DB_CONNECT_LIMIT_LOCAL=""
# prod
HOST=""
PORT=""
DB_HOST=""
DB_USER=""
DB_PASSWORD=""
DB_PORT=""
DB_NAME=""
DB_CONNECT_LIMIT=""
```
4. Connexion à la DB
    1. Dans *models*, créer un dossier *database*
    2. Dans *database*, créer un fichier *connect2db.js*
    3. Mettre le code suivant dans le fichier *connect2db.js*
    ```js
    require('dotenv').config();
    const mysql = require("promise-mysql");

    let db;

    module.exports = {

        connect : () => {
            if(!db){
                db_host = process.env.DB_HOST || process.env.DB_HOST_LOCAL;
                db_user = process.env.DB_USER || process.env.DB_USER_LOCAL;
                db_password = process.env.DB_PASSWORD || process.env.DB_PASSWORD_LOCAL;
                db_port = process.env.DB_PORT || process.env.DB_PORT_LOCAL;
                db_name = process.env.DB_NAME || process.env.DB_NAME_LOCAL;
                db_limit = process.env.DB_CONNECT_LIMIT || process.env.DB_CONNECT_LIMIT_LOCAL;

                db = mysql.createPool({
                    host : db_host,
                    user : db_user,
                    password : db_password,
                    port : db_port,
                    database : db_name,
                    connectionLimit : db_limit
                })
            }
        },

        get : () => {
            if(!db){
                console.log(db);
                throw new Error("Connexion non établie")
            }
            else
                return db;
        }
    }
    ```
5. Dans *app.js*, mettre le code suivant vers le début du document:
```js
const dbConnection = require("./models/database/connect2db");
dbConnection.connect();
```
## Json/HTMl
### Body-Parser
1. `ctrl`+`ù` : ouvrir le terminal
2. `npm i body-parser`
3. Dans *app.js*, mettre le code suivant:
```js
//json / html
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
```
## Routers
1. Créer un dossier *routers*
2. Créer un fichier *router.js* dans le dossier *routers*
3. Initialisation
    1. *.env* : `VERSION_API="v1"`
    2. *routers.js*, copier le code suivant:
    ```js
    const express = require('express');
    const router = express.Router();
    require('dotenv').config();

    //require middlewares

    //require routers par controller

    //utilisation
    router.get("/", function(req, res){res.send('Hello World')});

    module.exports = router;
    ```
    3. *app.js*, remplace `app.get(...`
    ```js
    const router = require('./routers/router');
    app.use(router);
    ```
# Module oeuvres
## SQL
### scripts de création de tables
* personnes.sql
* oeuvres.sql
* personnes_oeuvres.sql
## model
>Les models servent à récupérer les informations en base de données via des fonctions CRUD: create, getAll, getOne, update, delete, ...
* personnes.model.js
* oeuvres.model.js
## controller
* personnes.controller.js
## router
* personnes.router.js
* *router.js* à modifier