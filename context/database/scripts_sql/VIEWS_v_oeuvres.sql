create view v_oeuvres as
select 
    o.oeuvre_id as oeuvre_id, 
    t.type_oeuvre_id as type_oeuvre_id, 
    t.nom as type_oeuvre, 
    o.titre as titre,
    c.personne_id as createur_id,
    concat_ws(' ', c.prenoms, c.nom) as createur,
    po.fonction as fonction,
    o.date_creation as date_creation,
    o.image_url as image_url,
    o.couverture as couverture,
    o.maison_edition as maison_edition,
    o.isbn as ISBN,
    p.oeuvre_id as oeuvre_precedente_id,
    p.titre as oeuvre_precedente_titre,
    count(po.personne_id) as nb_personnes
from oeuvres o 
left join types_oeuvre t on t.type_oeuvre_id = o.type_oeuvre_id
left join oeuvres p on p.oeuvre_id = o.oeuvre_precedente_id
left join personnes_oeuvres po on po.oeuvre_id = o.oeuvre_id
left join personnes c on c.personne_id = o.createur_id
group by po.oeuvre_id
order by date_creation