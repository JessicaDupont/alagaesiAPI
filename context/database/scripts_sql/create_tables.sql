drop table citations;
drop table chapitres;
drop table fiches_informations;
drop table types_informations;
drop table fiches;
drop table fiches_fiches;
drop table types_fiches;
drop table personnes_oeuvres;
drop table oeuvres;
drop table types_oeuvres;
drop table personnes;

create table personnes(
    personne_id int primary key auto_increment,
    nom varchar(50) not null,
    prenom varchar(50) null, 
    date_de_naissance date null,
    lieu_de_naissance varchar(50) null
);
insert into personnes(personne_id, nom, prenom) values 
(1, "Paolini", "Christopher"),
(2, "Fangmeier", "Stephen"),
(3, "Greish", "Loïs H."),
(4, "Macauley", "Michael"),
(5, "Owen", "James A."),
(6, "Ciruelo", null);
create table types_oeuvres(
    type_oeuvre_id int primary key auto_increment,
    nom varchar(50) not null,
    description text null,
    type_oeuvre_parent_id int null,
    foreign key (type_oeuvre_parent_id) references types_oeuvres(type_oeuvre_id)
);
insert into types_oeuvres(type_oeuvre_id, nom, type_oeuvre_parent_id, description) values 
(1, "Littérature", null, null),
(2, "Narratif", 1, null),
(3, "Nouvelle", 2, "Histoire courte en prose."),
(4, "Conte", 2, "Histoire relatant des faits ou des aventures imaginaires."),
(5, "Mythe", 2, "Histoire symbolique qui relate la vie des êtres héroïques, divins ou fabuleux et qui fournit une explication de la marche du monde."),
(6, "Légende", 2, "Histoire populaire relatant un évènement héroïque ou fantastique."),
(7, "Biographie", 2, "Histoire de la vie d’une personne différente de l’auteur."),
(8, "Autobiographie", 2, "Histoire de la vie ou d’une partie de la vie d’un auteur racontée par lui-même."),
(9, "Chronique", 2, "Histoire d’évènement historiques rédigée par ordre chronologique."),
(10, "Apologue", 2, "Histoire courte illustrant une leçon morale."),
(11, "Journal", 2, "Histoire quotidienne de la vie de l’auteur."),
(12, "Roman", 2, "Histoire fictionnelle en prose."),
(13, "Poétique", 1, null),
(14, "Chanson", 13, "Texte écrit en vers et destiné à être chanté, le plus souvent composé de couplets et de refrains."),
(15, "Ballade", 13, "Poème médiéval composé de trois strophes."),
(16, "Calligramme", 13, "Texte dont l’agencement des mots forme un dessin, illustrant en général le thème du teste."),
(17, "Chant Royal", 13, "Texte poétique médiéval à structure fixe et traitant de sujets divins ou de royauté."),
(18, "Élégie", 13, "Texte poétique antique caractérisé par la complainte, la mélancolie ou la douleur."),
(19, "Épigramme", 13, "Texte poétique satirique."),
(20, "Épopée", 13, "Poème narratif de haute tenue relatant la légende d’un héros ou des évènements historiques extraordinaires."),
(21, "Fatrasie", 13, "Poème du Moyen-Age caractérisé par l’absurde ou des incohérences volontaires."),
(22, "Ode", 13, "Poème lyrique en général associé à une musique."),
(23, "Théâtral", 1, null),
(24, "Tragédie", 23, "Pièce de théâtre dont l’intrigue aboutit à une issue mortelle."),
(25, "Comédie", 23, "Pièce de théâtre caractérisée par l’humour et l’amusement."),
(26, "Farce", 23, "Pièce de théâtre médiévale caractérisée par un humour grossier et visant à faire rire."),
(27, "Moralité", 23, "Pièce de théâtre visant à véhiculer des valeurs morales individuelles ou sociétales."),
(28, "Drame", 23, "Pièce de théâtre rédigée en vers ou en prise et caractérisée par des femmes ou des hommes faisant face à des situations dramatiques."),
(29, "Proverbe", 23, "Pièce de théâtre dont le titre est un proverbe."),
(30, "Épistolaire", 1, "Le genre épistolaire regroupe les textes de courriers ou de lettres échangées entre une ou plusieurs personnes sur une période plus ou moins longue."),
(31, "Argumentatif", 1, null),
(32, "Essai", 31, "Texte visant à faire part d’idées et de thèses personnelles, quelque soit le sujet. Les types d’essai les plus répandus sont les essais politiques."),
(33, "Fable", 31, "Court récit allégorique à finalité morale dont les personnages peuvent être des êtres humains ou des animaux et le plus souvent écrit en vers."),
(34, "Fabliau", 31, "Court récit à finalité morale né au Moyen-Age et écrit en vers de 8 syllabes."),
(35, "Pamphlet", 31, "Texte court et percutant visant à critiquer des institutions ou une personnalité connue."),
(36, "Sermon", 31, "Texte destiné à être déclamé lors d’une cérémonie religieuse."),
(37, "Audiovisuel", null, null),
(38, "Film de fiction", 37, "Le film de fiction raconte une histoire qui peut être vraie (l'Histoire avec un H majuscule) ou non (une simple histoire). La fiction prend alors la forme d'un récit, classique ou non, reposant sur une narration."),
(39, "Film documentaire", 37, "Le film documentaire témoigne d’une réalité ou traite d'une problématique (sociale, politique, artistique, etc.) selon le point de vue du cinéaste. On nomme docu-fiction les documentaires qui intègrent des éléments fictifs (reconstitution par exemple) ou, à l'inverse, des fictions qui introduisent certains passages documentés. Il existe plusieurs types de documentaires du reportage au journal personnel, du film ethnographique à l'essai polémiste."),
(40, "Film d'animation", 37, "Le film d'animation est réalisé à l'aide de différentes techniques, à 2 dimensions (dessins, photographies, etc.) ou 3 dimensions (objets, pâte à modelée, etc.), de façon traditionnelle (image par image) ou informatique."),
(41, "Film expérimental", 37, "Le film expérimental se veut le contre-poids du cinéma narratif (fiction, documentaire, animation). Le cinéaste questionne les limites du cinéma dans sa forme (esthétique, formelle) et/ou son contenu (politique, cognitif), mais son audience et son économie spécifique le relèguent la plupart du temps aux festivals ou à l'université, et son influence sur le cinéma est insignifiante.");
(42, "Dessin", null, null);
create table oeuvres(
    oeuvre_id int primary key auto_increment,
    createur_id int not null,
    foreign key (createur_id) references personnes(personne_id),
    type_oeuvre_id int default=12,
    foreign key (type_oeuvre_id) references types_oeuvres(type_oeuvre_id),
    titre varchar(50) not null,
    date_creation date null,
    image_url varchar(150) null,
    resume text null
);
insert into oeuvres (oeuvre_id, createur_id, type_oeuvre_id, titre, date_creation) values
(1, 1, 12, "Eragon", "2003-08-26"),
(2, 1, 12, "L'Ainé", "2005-08-23"),
(3, 2, 38, "Eragon", "2006-12-06"),
(4, 3, 5, "Les mondes magiques d'Eragon", "2006-12-21"),
(5, 1, 12, "Brisingr", "2008-09-20"),
(6, 4, 1, "The inheritage Almanac", "2009-10-26"),
(7, 5, 32, "Secrets of Dragon Riders", "2010-02-02"),
(8, 1, 1, "Le guide de l'Alagaësia", "2010-10-28"),
(9, 1, 12, "L'Héritage", "2011-11-08"),
(10, 1, 42, "The official Eragon coloring book", "2017-05-02"),
(11, 1, 32, "La fourchette, la sorcière et le dragon", "2018-12-31");
create table personnes_oeuvres(
    oeuvre_id int,
    foreign key (oeuvre_id) references oeuvres(oeuvre_id),
    personne_id int,
    foreign key (personnes) references personnes(personne_id),
    primary key(oeuvre_id, personne_id),
    fonction varchar(50) null,
    date_fonction date null,
    description text null
);
insert into personnes_oeuvres (oeuvre_id, personne_id, fonction) values
(1, 1, "auteur"),
(2, 1, "auteur"),
(3, 2, "réalisateur"),
(4, 3, "auteur"),
(5, 1, "auteur"),
(6, 4, "auteur"),
(7, 5, "auteur"),
(8, 1, "auteur"),
(9, 1, "auteur"),
(10, 1, "auteur"),
(10, 6, "illustrateur"),
(11, 1, "auteur");

create table types_fiches(
    type_fiche_id int primary key auto_increment,
    nom varchar(50) not null,
    description text null, 
    type_fiche_parent_id int null,
    foreign key (type_fiche_parent_id) references types_fiches(type_fiche_id)
);
insert into types_fiches (type_fiche_id, nom, type_fiche_parent_id) values 
(1, "Personnage", null),
(2, "Faune", null),
(3, "Flore", null),
(4, "Races", null),
(5, "Histoire", null),
(6, "Géographie", null),
(7, "Langages", null);
create table fiches(
    fiche_id int primary key auto_increment,
    type_fiche_id int not null,
    foreign key (type_fiche_id) references types_fiches(type_fiche_id),
    nom varchar(50) not null,
    description text not null,
    date_debut date null,
    date_fin date null
);
insert into  fiches (fiche_id, type_fiche_id, nom, description) values 
(1, 1, "Durza", "Ombre à la solde de Galbatorix"),
(2, 4, "Ombre", "Créature vivante (humain ou autre race) possédée par des esprits"),
(3, 1, "Eragon", "Jeune fermier devenu dragonnier");
create table fiches_fiches(
    fiche_id_1 int,
    foreign key (fiche_id_1) references fiches(fiche_id),
    fiche_id_2 int,
    foreign key (fiche_id_2) references fiches(fiche_id),
    primary key(fiche_id_1, fiche_id_2),
    description text null
);
insert into fiches_fiches (fiche_id_1, fiche_id_2, description) values 
(1, 2, null);
create table types_informations(
    type_information_id int primary key auto_increment,
    nom varchar(50) not null,
    type_information_parent_id int null,
    foreign key (type_information_parent_id) references types_informations(type_information_id)
);
insert into types_informations(type_information_id, nom, type_information_parent_id) values 
(1, "Description physique", null, null);
create table fiches_informations(
    fiche_id int,
    foreign key (fiche_id) references fiches (fiche_id),
    type_information_id int, 
    foreign key (type_information_id) references types_informations(type_information_id),
    primary key(fiche_id, type_information_id),
    valeur_information varchar(50) not null,
    description_information text null
);
insert into fiches_informations (fiche_id, type_information_id, valeur_information) values 
(1, 1, "Yeux rouges, peau pâle comme un cadavre, cheveux cramoisis");

create table chapitres(
    chapitre_id int primary key auto_increment,
    oeuvre_id int not null,
    foreign key (oeuvre_id) references oeuvres(oeuvre_id),
    narrateur_id int null,
    foreign key (narrateur_id) references fiches(fiche_id),
    titre varchar(50) not null,
    description text null,
    ordre int not null,
    date_naine_debut date null,
    date_naine_fin date null
);
insert into chapitres (chapitre_id, oeuvre_id, narrateur_id, titre, description, ordre, date_naine_debut, date_naine_fin) values 
(1, 1, 1, "Prologue : l'ombre de la peur", "Durza attaque le convoi elfique qui transporte l'oeuf de dragon", 0, "7999-09-20", "7999-09-20"),
(2, 1, 3, "La découverte", "Eragon chasse dans la Crête. L'oeuf bleu apprait devant lui.", 2, null, null);
create table citations(
    citation_id int primary key auto_increment,
    chapitre_id int,
    foreign key (chapitre_id) references chapitres (chapitre_id),
    auteur_id int,
    foreign key (auteur_id) references fiches (fiche_id),
    titre varchar(50) not null,
    description text not null,
    ordre int null,
    date_naine date null
);
insert into citations(citation_id, chapitre_id, auteur_id, titre, description, ordre, date_naine) values 
(1, 2, null, "La Crête selon les légendes", "La traque avait entraîné Eragon sur la Crête, une chaine de montagnes souvages qui bordait l'Alagaësia à l'ouest. On colportait d'étranges légendes sur ces contrées, d'où descendaient parfois des hommes bizarres, d'allure peu engageante. Pourtant, Eragon n'avait pas peur de s'aventurer sur la Crête. Il était le seul chasseur de la région de Carvahall à oser poursuivre le gibier jusque dans les recoins escarpés de ces montagnes.",1401, "7999-09-20"),
(2, 3, null, "La Crête sans Seigneur", "La Crête était un des seuls lieux dont le roi Galbatorix ne pouvait pas prétendre être le maître et seigneur. Bien des décennies plus tard, on racontait encore comment la moitié de son armée avait disparu, le jour où elle s'était aventurée dans la vieille forêt. Une chape de malchance et de malédiction semblait peser sur les bois, A priori, rien d'extraordinaire, pourtant, les arbres dressaient leurs hautes silhouettes; le ciel était radieux; néanmoins, rares étaient ceux qui, ayant osé s'attarder sur ces massifs, en revenaient indemnes... quand ils en revenaient!", 1703, "7999-09-21");