create table fiches(
    fiche_id int primary key auto_increment,
    nom varchar(25) not null,
    categorie_id int not null,
    foreign key (categorie_id) references categories(categorie_id),
    chronologie_debut date,
    chronologie_fin date,
    description text
);