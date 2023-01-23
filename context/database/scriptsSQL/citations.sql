CREATE TABLE citations (
  citation_id int(11) NOT NULL primary key auto_increment,
  chapitre_id int(11) DEFAULT NULL,
  foreign key (chapitre_id) references chapitres (chapitre_id),
  auteur_id int(11) DEFAULT NULL,
  foreign key (auteur_id) references fiches (fiche_id),
  titre varchar(50) NOT NULL,
  description text NOT NULL,
  ordre int(11) DEFAULT NULL,
  date_naine date DEFAULT NULL
);

--
-- Données
--

INSERT INTO citations 
(citation_id, chapitre_id, auteur_id, titre, description, ordre, date_naine) 
VALUES
(1, 2, NULL, "La Crête selon les légendes", "La traque avait entraîné Eragon sur la Crête, une chaine de montagnes souvages qui bordait l'Alagaësia à l'ouest. On colportait d'étranges légendes sur ces contrées, d'où descendaient parfois des hommes bizarres, d'allure peu engageante. Pourtant, Eragon n'avait pas peur de s'aventurer sur la Crête. Il était le seul chasseur de la région de Carvahall à oser poursuivre le gibier jusque dans les recoins escarpés de ces montagnes.", 1401, '7999-09-20');
