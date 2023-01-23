CREATE TABLE `personnes_oeuvres` (
  `oeuvre_id` int(11) NOT NULL,
  FOREIGN KEY (`oeuvre_id`) REFERENCES `oeuvres` (`oeuvre_id`),
  `personne_id` int(11) NOT NULL,
  FOREIGN KEY (`personne_id`) REFERENCES `personnes` (`personne_id`),
  PRIMARY KEY (`oeuvre_id`,`personne_id`),
  `fonction` varchar(50) DEFAULT NULL,
  `date_fonction` date DEFAULT NULL,
  `description` text DEFAULT NULL
);

--
-- Données
--

INSERT INTO `personnes_oeuvres` (`oeuvre_id`, `personne_id`, `fonction`, `date_fonction`, `description`) VALUES
(1, 1, 'auteur', NULL, NULL),
(2, 1, 'auteur', NULL, NULL),
(3, 2, 'réalisateur', NULL, NULL),
(4, 3, 'auteur', NULL, NULL),
(5, 1, 'auteur', NULL, NULL),
(6, 4, 'auteur', NULL, NULL),
(7, 5, 'auteur', NULL, NULL),
(8, 1, 'auteur', NULL, NULL),
(9, 1, 'auteur', NULL, NULL),
(10, 1, 'auteur', NULL, NULL),
(10, 6, 'illustrateur', NULL, NULL),
(11, 1, 'auteur', NULL, NULL);

