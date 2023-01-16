# Todo List
## Module oeuvres
### table oeuvres et vue V_oeuvres
* ``POST/oeuvres + body`` : créer 1 oeuvre avec les inforamtions minimales
* ``GET/oeuvres`` : liste des oeuvres (avec vue)
* ``GET/oeuvres/id`` : afficher 1 oeuvre avec personnes liées
* ``PATCH/oeuvres/id + body`` : modifier les informations d'une oeuvres
* ``DELETE/oeuvres/id`` : supprimer une oeuvre
### table types_oeuvres
* ``GET/oeuvres/types`` : liste de tous les types d'oeuvres
### table personnes
* ``POST/personnes + body`` : créer une personne
* ``GET/personnes`` : liste des personnes
* ``GET/personnes/id`` : afficher 1 personne
* ``PUT/personnes/id + body`` : modifier les informations d'une personne
* ``PATCH/personnes/id + body`` : modifier certaines infos d'une personne
* ``DELETE/personnes/id`` : supprimer une personne
### table personnes_oeuvres
* ``GET/oeuvres/personne/id`` : liste des oeuvres d'1 personne
* ``GET/personnes/oeuvre/id`` : liste des personnes sur une oeuvre
* ``POST/oeuvres/personne/id + body`` : créer une relation personne-oeuvre