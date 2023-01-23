CREATE TABLE `personnes` (
  `personne_id` int(11) NOT NULL primary key AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `date_de_naissance` date DEFAULT NULL,
  `lieu_de_naissance` varchar(50) DEFAULT NULL
);

--
-- Données
--

INSERT INTO `personnes` 
(`personne_id`, `nom`, `prenom`, `date_de_naissance`, `lieu_de_naissance`) 
VALUES
(1, 'Paolini', 'Christopher', NULL, NULL),
(2, 'Fangmeier', 'Stephen', NULL, NULL),
(3, 'Greish', 'Loïs H.', NULL, NULL),
(4, 'Macauley', 'Michael', NULL, NULL),
(5, 'Owen', 'James A.', NULL, NULL),
(6, 'Ciruelo', NULL, NULL, NULL);

