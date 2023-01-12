create table personnes_oeuvres(
    personne_id int, 
    foreign key (personne_id) references personnes(personne_id),
    oeuvre_id int, 
    foreign key (oeuvre_id) references oeuvres(oeuvre_id),
    fonction varchar(25),
    primary key(personne_id, oeuvre_id)
);