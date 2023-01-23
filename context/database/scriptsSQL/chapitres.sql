CREATE TABLE chapitres (
  chapitre_id int(11) NOT NULL primary key auto_increment,
  oeuvre_id int(11) NOT NULL,
  foreign key (oeuvre_id) references oeuvres (oeuvre_id),
  narrateur_id int(11) DEFAULT NULL,
  foreign key (narrateur_id) references fiches (fiche_id),
  titre varchar(50) NOT NULL,
  description text DEFAULT NULL,
  ordre int(11) NOT NULL,
  date_naine_debut date DEFAULT NULL,
  date_naine_fin date DEFAULT NULL
);

--
-- Données
--

INSERT INTO chapitres 
(chapitre_id, oeuvre_id, narrateur_id, titre, description, ordre, date_naine_debut, date_naine_fin) 
VALUES
(1, 1, 1, "Prologue : l'ombre de la peur", "Durza attaque le convoi elfique qui transporte l'oeuf de dragon", 0, '7999-09-20', '7999-09-20'),
(2, 1, 3, "La découverte", "Eragon chasse dans la Crête. L'oeuf bleu apparait devant lui.", 2, NULL, NULL);