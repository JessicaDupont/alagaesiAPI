CREATE TABLE `types_fiches` (
  `type_fiche_id` int(11) NOT NULL primary key AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `description` text DEFAULT NULL,
  `type_fiche_parent_id` int(11) DEFAULT NULL,
  FOREIGN KEY (`type_fiche_parent_id`) REFERENCES `types_fiches` (`type_fiche_id`)
);

--
-- Données
--

INSERT INTO `types_fiches` (`type_fiche_id`, `nom`, `description`, `type_fiche_parent_id`) VALUES
(1, 'Personnage', NULL, NULL),
(2, 'Faune', NULL, NULL),
(3, 'Flore', NULL, NULL),
(4, 'Races', NULL, NULL),
(5, 'Histoire', NULL, NULL),
(6, 'Géographie', NULL, NULL),
(7, 'Langages', NULL, NULL);

