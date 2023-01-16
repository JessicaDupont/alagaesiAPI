CREATE TABLE `personnes` (
 `personne_id` int(11) NOT NULL AUTO_INCREMENT,
 `prenoms` varchar(50) DEFAULT NULL,
 `nom` varchar(25) NOT NULL,
 PRIMARY KEY (`personne_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

INSERT INTO `personnes` (`personne_id`, `prenoms`, `nom`) 
VALUES 
('1', 'Christopher', 'Paolini'),
('2', 'James A.', 'Owen'), 
('3', 'Loïs H.', 'Gresh'),
('4', 'Michael', 'Macauley'), 
('5', 'Stefen', 'Fangmeier'),
('6', NULL, 'Ciruelo');