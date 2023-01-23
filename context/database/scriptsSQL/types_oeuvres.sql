CREATE TABLE `types_oeuvres` (
  `type_oeuvre_id` int(11) NOT NULL primary key AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `description` text DEFAULT NULL,
  `type_oeuvre_parent_id` int(11) DEFAULT NULL,
  FOREIGN KEY (`type_oeuvre_parent_id`) REFERENCES `types_oeuvres` (`type_oeuvre_id`)
);

--
-- Déchargement des données de la table `types_oeuvres`
--

INSERT INTO `types_oeuvres` 
(`type_oeuvre_id`, `nom`, `description`, `type_oeuvre_parent_id`) 
VALUES
(1, 'Littérature', NULL, NULL),
(2, 'Narratif', NULL, 1),
(3, 'Nouvelle', 'Histoire courte en prose.', 2),
(4, 'Conte', 'Histoire relatant des faits ou des aventures imaginaires.', 2),
(5, 'Mythe', 'Histoire symbolique qui relate la vie des êtres héroïques, divins ou fabuleux et qui fournit une explication de la marche du monde.', 2),
(6, 'Légende', 'Histoire populaire relatant un évènement héroïque ou fantastique.', 2),
(7, 'Biographie', 'Histoire de la vie d’une personne différente de l’auteur.', 2),
(8, 'Autobiographie', 'Histoire de la vie ou d’une partie de la vie d’un auteur racontée par lui-même.', 2),
(9, 'Chronique', 'Histoire d’évènement historiques rédigée par ordre chronologique.', 2),
(10, 'Apologue', 'Histoire courte illustrant une leçon morale.', 2),
(11, 'Journal', 'Histoire quotidienne de la vie de l’auteur.', 2),
(12, 'Roman', 'Histoire fictionnelle en prose.', 2),
(13, 'Poétique', NULL, 1),
(14, 'Chanson', 'Texte écrit en vers et destiné à être chanté, le plus souvent composé de couplets et de refrains.', 13),
(15, 'Ballade', 'Poème médiéval composé de trois strophes.', 13),
(16, 'Calligramme', 'Texte dont l’agencement des mots forme un dessin, illustrant en général le thème du teste.', 13),
(17, 'Chant Royal', 'Texte poétique médiéval à structure fixe et traitant de sujets divins ou de royauté.', 13),
(18, 'Élégie', 'Texte poétique antique caractérisé par la complainte, la mélancolie ou la douleur.', 13),
(19, 'Épigramme', 'Texte poétique satirique.', 13),
(20, 'Épopée', 'Poème narratif de haute tenue relatant la légende d’un héros ou des évènements historiques extraordinaires.', 13),
(21, 'Fatrasie', 'Poème du Moyen-Age caractérisé par l’absurde ou des incohérences volontaires.', 13),
(22, 'Ode', 'Poème lyrique en général associé à une musique.', 13),
(23, 'Théâtral', NULL, 1),
(24, 'Tragédie', 'Pièce de théâtre dont l’intrigue aboutit à une issue mortelle.', 23),
(25, 'Comédie', 'Pièce de théâtre caractérisée par l’humour et l’amusement.', 23),
(26, 'Farce', 'Pièce de théâtre médiévale caractérisée par un humour grossier et visant à faire rire.', 23),
(27, 'Moralité', 'Pièce de théâtre visant à véhiculer des valeurs morales individuelles ou sociétales.', 23),
(28, 'Drame', 'Pièce de théâtre rédigée en vers ou en prise et caractérisée par des femmes ou des hommes faisant face à des situations dramatiques.', 23),
(29, 'Proverbe', 'Pièce de théâtre dont le titre est un proverbe.', 23),
(30, 'Épistolaire', 'Le genre épistolaire regroupe les textes de courriers ou de lettres échangées entre une ou plusieurs personnes sur une période plus ou moins longue.', 1),
(31, 'Argumentatif', NULL, 1),
(32, 'Essai', 'Texte visant à faire part d’idées et de thèses personnelles, quelque soit le sujet. Les types d’essai les plus répandus sont les essais politiques.', 31),
(33, 'Fable', 'Court récit allégorique à finalité morale dont les personnages peuvent être des êtres humains ou des animaux et le plus souvent écrit en vers.', 31),
(34, 'Fabliau', 'Court récit à finalité morale né au Moyen-Age et écrit en vers de 8 syllabes.', 31),
(35, 'Pamphlet', 'Texte court et percutant visant à critiquer des institutions ou une personnalité connue.', 31),
(36, 'Sermon', 'Texte destiné à être déclamé lors d’une cérémonie religieuse.', 31),
(37, 'Audiovisuel', NULL, NULL),
(38, 'Film de fiction', 'Le film de fiction raconte une histoire qui peut être vraie (l\'Histoire avec un H majuscule) ou non (une simple histoire). La fiction prend alors la forme d\'un récit, classique ou non, reposant sur une narration.', 37),
(39, 'Film documentaire', "Le film documentaire témoigne d’une réalité ou traite d'une problématique (sociale, politique, artistique, etc.) selon le point de vue du cinéaste. On nomme docu-fiction les documentaires qui intègrent des éléments fictifs (reconstitution par exemple) ou, à l'inverse, des fictions qui introduisent certains passages documentés. Il existe plusieurs types de documentaires du reportage au journal personnel, du film ethnographique à l'essai polémiste.", 37),
(40, "Film d'animation", 'Le film d\'animation est réalisé à l\'aide de différentes techniques, à 2 dimensions (dessins, photographies, etc.) ou 3 dimensions (objets, pâte à modelée, etc.), de façon traditionnelle (image par image) ou informatique.', 37),
(41, 'Film expérimental', "Le film expérimental se veut le contre-poids du cinéma narratif (fiction, documentaire, animation). Le cinéaste questionne les limites du cinéma dans sa forme (esthétique, formelle) et/ou son contenu (politique, cognitif), mais son audience et son économie spécifique le relèguent la plupart du temps aux festivals ou à l'université, et son influence sur le cinéma est insignifiante.", 37),
(42, "Dessin", NULL, NULL);