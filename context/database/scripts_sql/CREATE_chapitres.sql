create table chapitres(
    chapitre_id int primary key auto_increment,
    oeuvre_id int not null,
    foreign key (oeuvre_id) references oeuvres(oeuvre_id),
    ordre int not null,
    titre varchar(250) not null,
    resume text,
    narrateur_id int,
    foreign key (narrateur_id) references fiches(fiche_id),
    chronologie_debut date,
    chronologie_fin date
);