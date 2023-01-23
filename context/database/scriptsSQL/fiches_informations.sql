CREATE TABLE `fiches_informations` (
  `fiche_id` int(11) NOT NULL,
  FOREIGN KEY (`fiche_id`) REFERENCES `fiches` (`fiche_id`),
  `type_information_id` int(11) NOT NULL,
  FOREIGN KEY (`type_information_id`) REFERENCES `types_informations` (`type_information_id`),
  PRIMARY KEY (`fiche_id`,`type_information_id`),
  `valeur_information` text NOT NULL,
  `description_information` text DEFAULT NULL
);

--
-- Déchargement des données de la table `fiches_informations`
--

INSERT INTO `fiches_informations` 
(`fiche_id`, `type_information_id`, `valeur_information`, `description_information`) 
VALUES
(1, 1, 'Yeux rouges, peau pâle comme un cadavre, cheveux cramoisis', NULL);

