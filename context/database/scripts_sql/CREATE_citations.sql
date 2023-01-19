create table citations(
    citation_id int primary key auto_increment,
    titre varchar(150) not null,
    chapitre_id int,
    foreign key (chapitre_id) references chapitres(chapitre_id),
    texte text not null,
    auteur_id int,
    foreign key(auteur_id) references fiches(fiche_id),
    ordre int,
    chronologie date
);