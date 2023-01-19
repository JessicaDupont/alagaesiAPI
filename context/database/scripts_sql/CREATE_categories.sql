create table categories(
    categorie_id int primary key auto_increment,
    nom varchar(25),
    categorie_parent_id int,
    foreign key (categorie_parent_id) references categories(categorie_id)
);