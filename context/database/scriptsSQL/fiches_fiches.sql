CREATE TABLE `fiches_fiches` (
  `fiche_id_1` int(11) NOT NULL,
  FOREIGN KEY (`fiche_id_1`) REFERENCES `fiches` (`fiche_id`),
  `fiche_id_2` int(11) NOT NULL,
  FOREIGN KEY (`fiche_id_2`) REFERENCES `fiches` (`fiche_id`),
  PRIMARY KEY (`fiche_id_1`,`fiche_id_2`),
  `description` text DEFAULT NULL
);

--
-- Données
--

INSERT INTO `fiches_fiches` 
(`fiche_id_1`, `fiche_id_2`, `description`) 
VALUES
(1, 2, NULL);

