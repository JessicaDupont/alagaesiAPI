CREATE TABLE `types_oeuvre` (
 `type_oeuvre_id` int(11) NOT NULL AUTO_INCREMENT,
 `nom` varchar(25) NOT NULL,
 PRIMARY KEY (`type_oeuvre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

INSERT INTO `types_oeuvre` (`type_oeuvre_id`, `nom`) 
VALUES 
(1, 'livre'),
(2, 'film');