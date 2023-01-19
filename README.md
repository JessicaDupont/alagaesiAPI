# Comment bien utiliser l'AlagaesiAPI
* [/fiches](#fiches)
* [/personnes](#personnes)
* [/oeuvres](#oeuvres)
* [/chapitres](#chapitres)
* [/citations](#citations)

# /fiches
> les fiches sont diverses. Chacune d'elle reprend les informations sur un élément de l'Alagaësia.
* [Structure des données](#données-fiches)
* [POST + body](#post-fiches--body)
* [GET](#get-fiches)
* [GET + id](#get-fiches1)
* [PATCH + id + body](#patch-fiches1--body)
* [DELETE + id](#delete-fiches1)
## Données `fiches`
## POST `/fiches/` + body
## GET `/fiches/`
## GET `/fiches/1`
## PATCH `/fiches/1` + body
## DELETE `/fiches/1`

# /personnes
> "personnes" définit les personnes réelles ayant travailler autour de l'univers de l'Alagaësia.
* [Structure des données](#données-personnes)
* [POST + body](#post-personnes--body)
* [GET](#get-personnes)
* [GET + id (oeuvre)](#get-personnesoeuvre1)
* [GET + id](#get-personnes1)
* [PATCH + id + body](#patch-personnes1--body)
* [DELETE + id](#delete-personnes1)
## Données `personnes`
| Champ | Valeur | Commentaire | Exemple |
|--|--|--|--|
|`personne_id`|attribution automatique|entier|3|
|`prenoms`||max 50 caractères|Loïs H.|
|`nom`|**obligatoire**|max 25 caractères|Gresh|
## POST `/personnes/` + body
> seules les informations obligatoires sont transmises lors de la création. Les informations optionnelles doivent être ajoutées avec le [PATCH](#patch-personnes1--body)
## GET `/personnes/`
## GET `/personnes/oeuvre/1`
> retourne la liste des personnes ayant contribué à l'oeuvre dont l'id est passé en paramètre.
## GET `/personnes/1`
## PATCH `/personnes/1` + body
## DELETE `/personnes/1`

# /Oeuvres
> "Oeuvres" définit les oeuvres existant autour de l'univers de l'Alagaësia qu'il s'agisse des livres, films, jeux vidéos, dessins, séries, ...
* [Structure des données](#données-oeuvres)
* [POST + body](#post-oeuvres--body)
* [POST + id (oeuvre) + body](#post-oeuvrespersonne1--body)
* [GET](#get-oeuvres)
* [GET + id (personne)](#get-oeuvrespersonne1)
* [GET + id](#get-oeuvres1)
* [PATCH + id + body](#patch-oeuvres1--body)
* [DELETE + id](#delete-oeuvres1)
## Données `oeuvres`
| Champ | Valeur | Commentaire | Exemple |
|--|--|--|--|
|`oeuvre_id`|attribution automatique|entier|1|
|`type_oeuvre_id`|**obligatoire** valeur par défaut : 1 (livre)|entier, clé étrangère (types_oeuvres)|1|
|`type_oeuvre`|*lecture uniquement*||livre|
|`titre`|**obligatoire**|max 50 caractères|Eragon|
|`createur_id`||entier, clé étrangère (personnes)|1|
|`createur`|*lecture uniquement*||Christopher Paolini|
|`fonction`||cas particulier|auteur|
|`date_creation`||date|2003-08-26|
|`image_url`||max 150 caractères||
|`couverture`||text|Depuis des décennies, le mal règne dans l'Empire d'Alagaësia. Or un jour, Eragon, un jeune fermier, découvre au cœur de la forêt une pierre magnifique. Elle est si bleue, si lisse ! Fasciné, il l'emporte à Carvahall, le village où il vit avec son oncle et son cousin. Comment pourrait-il deviner qu'il s'agit d'un œuf, et qu'un dragon porteur d'un héritage ancestral, aussi vieux que l'Empire lui-même, va éclore ... ?<br/>Dés lors, la vie d'Eragon est bouleversée. Contraint de quitter les siens, il s'engage dans une quête qui le mènera aux confins de l'Alagaësia. Guidé par les conseils de Brom, un vieux conteur, le garçon devra affronter, avec son dragon bleu, les terribles ennemis envoyés par le roi dont la malveillance démoniaque ne connaît aucune limite.<br/>Eragon n'a que quinze ans, mais le destin de l'Empire est désormais entre ses mains.|
|`maison_edition`||max 50 caractères|Bayard|
|`ISBN`||max 20 caractères|978-2-7470-3334-3|
|`oeuvre_precedente_id`||entier, clé étrangère (oeuvres)|NULL|
|`oeuvre_precedente_titre`|*lecture uniquement*|||
|`nb_personnes`|*lecture uniquement*|||
## POST `/oeuvres/` + body
> seules les informations obligatoires sont transmises lors de la création. Les informations optionnelles doivent être ajoutées avec le [PATCH](#patch-oeuvres1--body)
## POST `/oeuvres/personne/1` + body
> lie une oeuvre à une personne
## GET `/oeuvres/`
## GET `/oeuvres/personne/1`
> retourne la liste des oeuvres liés à la personne passée en paramètre.
## GET `/oeuvres/1`
## PATCH `/oeuvres/1` + body
## DELETE `/oeuvres/1`

# /Chapitres
> "Chapitres" définit les étapes à l'intérieur d'une oeuvre.
* [Structure des données](#données-chapitres)
* [POST + body](#post-chapitres--body)
* [GET](#get-chapitres)
* [GET + id](#get-chapitres1)
* [PATCH + id + body](#patch-chapitres1--body)
* [DELETE + id](#delete-chapitres1)
## Données `chapitres`
| Champ | Valeur | Commentaire | Exemple |
|--|--|--|--|
|`chapitre_id`|attribution automatique||1|
|`oeuvre_id`|**obligatoire**|entier, clé étrangère (oeuvres)|1|
|`ordre`|**obligatoire**|entier|1|
|`titre`|**obligatoire**|max 250 caractères|Prologue: L'ombre de la peur|
|`resume`||text|Embuscade des elfes par Durza et des Urgals. Arya téléporte l'oeuf de dragon avant d'être faite prisonnière par Durza|
|`narrateur_id`||entier, clé étrangère (fiches)|1|
|`chronologie_debut`||date|7999-09-20|
|`chronologie_fin`||date|7999-09-20|
## POST `/chapitres/` + body
> seules les informations obligatoires sont transmises lors de la création. Les informations optionnelles doivent être ajoutées avec le [PATCH](#patch-chapitres1--body)
## GET `/chapitres/`
## GET `/chapitres/1`
## PATCH `/chapitres/1` + body
## DELETE `/chapitres/1`

# /Citations
> "Citations" définit les citations extraites d'un chapitre d'une oeuvre.
* [Structure des données](#données-citations)
* [POST + body](#post-citations--body)
* [GET](#get-citations)
* [GET + id](#get-citations1)
* [PATCH + id + body](#patch-citations1--body)
* [DELETE + id](#delete-citations1)
## Données `citations`
| Champ | Valeur | Commentaire | Exemple |
|--|--|--|--|
|`citation_id`|attribution automatique||1|
|`titre`|**obligatoire**|max 150 caractères|La Crête selon les légendes|
|`chapitre_id`||entier, clé étrangère (chapitres)|2|
|`texte`|**obligatoire**|text|La traque avait entraîné Eragon sur la Crête, une chaine de montagnes souvages qui bordait l'Alagaësia à l'ouest. On colportait d'étranges légendes sur ces contrées, d'où descendaient parfois des hommes bizarres, d'allure peu engageante. Pourtant, Eragon n'avait pas peur de s'aventurer sur la Crête. Il était le seul chasseur de la région de Carvahall à oser poursuivre le gibier jusque dans les recoins escarpés de ces montagnes.|
|`auteur_id`||entier, clé étrangère (fiches)||
|`ordre`||entier|1401|
|`chronologie`||date|7999-09-20|
## POST `/citations/` + body
> seules les informations obligatoires sont transmises lors de la création. Les informations optionnelles doivent être ajoutées avec le [PATCH](#patch-citation1--body)
## GET `/citations/`
## GET `/citations/1`
## PATCH `/citations/1` + body
## DELETE `/citations/1`