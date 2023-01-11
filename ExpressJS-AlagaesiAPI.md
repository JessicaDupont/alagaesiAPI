# Étapes d'un projet
1. [Création du projet](#création-du-projet)
2. [Structure de l'application](#structure)
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
    1. *.env* : `PORT="3000"`
    2. *app.js* (import): `require('dotenv').config();`
    3. *app.js* (utilisation): `process.env.PORT`
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
const port = process.env.PORT;

app.get('/', function(req, res){
  res.send('Hello World')
});

app.listen(port, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
4. `nodemon` pour exécuter l'application et vérifier que tout va toujours bien
## Initialisation Git
1. fichier *.gitignore*
    1. créer le fichier *.gitignore*
    2. copier/coller le contenu de [github/gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore) dans le fichier créé précédement.
2. utiliser git via Github Desktop
# Structure
* [Routers](#routers)
* [Controllers](#controllers)
* [Models](#models)
* [Middlewares](#middlewares)
## Routers
## Controllers
## Models
## Middlewares