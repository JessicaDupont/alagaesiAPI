CREATE TABLE fiches (
  fiche_id int(11) NOT NULL primary key auto_increment,
  type_fiche_id int(11) NOT NULL,
  FOREIGN key (type_fiche_id) references types_fiches (type_fiche_id),
  nom varchar(50) NOT NULL,
  description text NOT NULL,
  date_naine bit(1) default 1,
  date_debut date DEFAULT NULL,
  date_fin date DEFAULT NULL
);

--
-- Données
--

INSERT INTO `fiches` 
(`fiche_id`, `type_fiche_id`, `nom`, `description`, `date_debut`, `date_fin`) 
VALUES
(1, 1, 'Durza', 'Ombre à la solde de Galbatorix', NULL, NULL),
(2, 4, 'Ombre', 'Créature vivante (humain ou autre race) possédée par des esprits', NULL, NULL),
(3, 1, 'Eragon', 'Jeune fermier devenu dragonnier', NULL, NULL);
