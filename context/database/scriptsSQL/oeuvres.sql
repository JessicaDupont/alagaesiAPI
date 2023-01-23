CREATE TABLE `oeuvres` (
  `oeuvre_id` int(11) NOT NULL primary key AUTO_INCREMENT,
  oeuvre_precedente_id int null,
  FOREIGN key (oeuvre_precedente_id) references oeuvres(oeuvre_id),
  `createur_id` int(11) NOT NULL,
  FOREIGN KEY (`createur_id`) REFERENCES `personnes` (`personne_id`),
  `type_oeuvre_id` int(11) DEFAULT 12,
  FOREIGN KEY (`type_oeuvre_id`) REFERENCES `types_oeuvres` (`type_oeuvre_id`),
  `titre` varchar(50) NOT NULL,
  `date_creation` date DEFAULT NULL,
  `image_url` varchar(150) DEFAULT NULL,
  `resume` text DEFAULT NULL
);

--
-- Données
--

INSERT INTO `oeuvres` 
(`oeuvre_id`, `createur_id`, `type_oeuvre_id`, `titre`, `date_creation`, `image_url`, `resume`) 
VALUES
(1, 1, 12, 'Eragon', '2003-08-26', NULL, NULL),
(2, 1, 12, 'L\'Ainé', '2005-08-23', NULL, NULL),
(3, 2, 38, 'Eragon', '2006-12-06', NULL, NULL),
(4, 3, 5, 'Les mondes magiques d\'Eragon', '2006-12-21', NULL, NULL),
(5, 1, 12, 'Brisingr', '2008-09-20', NULL, NULL),
(6, 4, 1, 'The inheritage Almanac', '2009-10-26', NULL, NULL),
(7, 5, 32, 'Secrets of Dragon Riders', '2010-02-02', NULL, NULL),
(8, 1, 1, 'Le guide de l\'Alagaësia', '2010-10-28', NULL, NULL),
(9, 1, 12, 'L\'Héritage', '2011-11-08', NULL, NULL),
(10, 1, 42, 'The official Eragon coloring book', '2017-05-02', NULL, NULL),
(11, 1, 32, 'La fourchette, la sorcière et le dragon', '2018-12-31', NULL, NULL);

