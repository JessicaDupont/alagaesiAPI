CREATE TABLE `fiches_chapitres` (
  `chapitre_id` int(11) NOT NULL,
  FOREIGN KEY (`chapitre_id`) REFERENCES `chapitres` (`chapitre_id`),
  `fiche_id` int(11) NOT NULL,
  FOREIGN KEY (`fiche_id`) REFERENCES `fiches` (`fiche_id`)
  PRIMARY KEY (`chapitre_id`,`fiche_id`),
  `description` text DEFAULT NULL,
);
