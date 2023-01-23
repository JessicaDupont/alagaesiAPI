CREATE TABLE `types_informations` (
  `type_information_id` int(11) NOT NULL primary key AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `type_information_parent_id` int(11) DEFAULT NULL,
  FOREIGN KEY (`type_information_parent_id`) REFERENCES `types_informations` (`type_information_id`)
);

--
-- Données
--

INSERT INTO `types_informations` 
(`type_information_id`, `nom`, `type_information_parent_id`) 
VALUES
(1, 'Description physique', NULL);

