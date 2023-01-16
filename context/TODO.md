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
---
## Module Chapitre
### table chapitres
* `POST/chapitres + body` : créer un chapitre
* `GET/chapitres` : liste des chapitres
* `GET/chapitres/id` : infos d'1 chapitre
* `PATCH/chapitres/id + body` : modifier certaines informations d'1 chapitre
* `DELETE/chapitres/id` : supprimer un chapitre
### table citations
- `POST/citations + body` : créer 1 citation
- `GET/citations` : liste de toutes les citations
- `GET/citations/id` : infos d'1 citation
- `GET/citations/oeuvre/id` : liste des citations d'1 oeuvre
- `GET/citations/chapitre/id` : liste des citations d'un chapitre
- `PATCH/citations/id + body` : modifier certaines infos d'une citation
- `DELETE/citations/id` : supprimer 1 citation
---
## Module Fiches
### table fiche_categories
### table fiches
### table fiches_fiches