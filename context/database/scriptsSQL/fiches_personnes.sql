CREATE TABLE `fiches_personnes` (
  `fiche_id` int(11) NOT NULL,
  FOREIGN KEY (`fiche_id`) REFERENCES `fiches` (`fiche_id`),
  `personne_id` int(11) NOT NULL,
  FOREIGN KEY (`personne_id`) REFERENCES `personnes` (`personne_id`),
  PRIMARY KEY (`fiche_id`,`personne_id`),
  `description` text DEFAULT NULL
);
