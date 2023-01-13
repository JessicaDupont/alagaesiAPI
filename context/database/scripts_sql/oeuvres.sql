create table oeuvres(
    oeuvre_id int primary key auto_increment,
    oeuvre_precedente int,
    titre varchar(50) not null,
    type_oeuvre_id int,
    foreign key (type_oeuvre_id) references types_oeuvres(type_oeuvre_id),
    date_creation date,
    image_url varchar(150),
    couverture text,
    maison_edition varchar(50),
    isbn varchar(20)
);
alter table oeuvres 
add foreign key(oeuvre_precedente) 
references oeuvres(oeuvre_id);