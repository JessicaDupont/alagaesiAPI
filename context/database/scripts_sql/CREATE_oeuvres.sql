CREATE TABLE `oeuvres` (
 `oeuvre_id` int(11) NOT NULL AUTO_INCREMENT,
 `oeuvre_precedente` int(11) DEFAULT NULL,
 `titre` varchar(50) NOT NULL,
 `type_oeuvre_id` int(11) NOT NULL DEFAULT 1,
 `date_creation` date DEFAULT NULL,
 `image_url` varchar(150) DEFAULT NULL,
 `couverture` text DEFAULT NULL,
 `maison_edition` varchar(50) DEFAULT NULL,
 `isbn` varchar(20) DEFAULT NULL,
 PRIMARY KEY (`oeuvre_id`),
 UNIQUE KEY `isbn` (`isbn`),
 KEY `oeuvre_precedente` (`oeuvre_precedente`),
 KEY `type_oeuvre` (`type_oeuvre_id`),
 CONSTRAINT `oeuvres_ibfk_1` FOREIGN KEY (`oeuvre_precedente`) REFERENCES `oeuvres` (`oeuvre_id`),
 CONSTRAINT `oeuvres_ibfk_2` FOREIGN KEY (`type_oeuvre_id`) REFERENCES `types_oeuvre` (`type_oeuvre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

INSERT INTO `oeuvres` (`oeuvre_id`, `oeuvre_precedente`, `titre`, `type_oeuvre_id`, `date_creation`, `image_url`, `couverture`, `maison_edition`, `isbn`) 
VALUES 
('1', NULL, 'Eragon', '1', '2003-08-26', NULL, NULL, 'Bayard', '978-2-7470-3334-3'), 
('2', '1', 'L\'Ainé', '1', '2005-08-23', NULL, NULL, 'Bayard', '978-2-7420-2119-7'),
('3', '1', 'Eragon', '2', '2006-12-06', NULL, NULL, 'Fox', NULL), 
('4', NULL, 'Les mondes magiques d\'Eragon', '1', '2007-01-04', NULL, NULL, 'Le Pré aux Clercs', '978-2-7470-29612'),
('5', '2', 'Brisingr', '1', '2008-09-20', NULL, NULL, 'Bayard', '978-2-7470-29612-1'), 
('6', NULL, 'The inheritage Almanac', '1', '2009-10-26', NULL, NULL, NULL, NULL),
('7', NULL, 'Secrets of dragon riders', '1', '2010-02-01', NULL, NULL, NULL, NULL), 
('8', '5', 'Le guide de l\'Alagaësia', '1', '2010-10-28', NULL, NULL, 'Bayard', '978-2-7470-3339-8'),
('9', '5', 'L\'Héritage', '1', '2011-11-08', NULL, NULL, 'Bayard', '978-2-7470-2855-4'), 
('10', 9, 'Eragon colouring book', '1', '2017-05-02', NULL, NULL, 'Rizzoli', '978-88-17-09539-6'),
('11', '9', 'La fourchette, la sorcière et le dragon', '1', '2018-12-31', NULL, NULL, 'Bayard', '979-1-0363-1233-5');