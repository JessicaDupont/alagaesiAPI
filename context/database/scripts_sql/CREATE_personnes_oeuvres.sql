CREATE TABLE `personnes_oeuvres` (
 `personne_id` int(11) NOT NULL,
 `oeuvre_id` int(11) NOT NULL,
 `fonction` varchar(25) DEFAULT NULL,
 PRIMARY KEY (`personne_id`,`oeuvre_id`),
 KEY `oeuvre_id` (`oeuvre_id`),
 CONSTRAINT `personnes_oeuvres_ibfk_1` FOREIGN KEY (`personne_id`) REFERENCES `personnes` (`personne_id`),
 CONSTRAINT `personnes_oeuvres_ibfk_2` FOREIGN KEY (`oeuvre_id`) REFERENCES `oeuvres` (`oeuvre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

INSERT INTO `personnes_oeuvres` (`personne_id`, `oeuvre_id`, `fonction`) 
VALUES 
('1', '1', 'auteur'),
('1', '2', 'auteur'),
('1', '5', 'auteur'),
('1', '8', 'auteur'),
('1', '9', 'auteur'),
('1', '10', 'auteur'),
('1', '11', 'auteur'),
('2', '7', 'auteur'),
('3', '4', 'auteur'),
('4', '6', 'auteur'),
('5', '3', 'auteur'),
('6', '10', 'illustrateur');