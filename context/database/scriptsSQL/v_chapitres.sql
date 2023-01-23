CREATE VIEW `v_chapitres` AS SELECT 
`c`.`chapitre_id` AS `chapitre_id`, 
`c`.`oeuvre_id` AS `oeuvre_id`, 
`o`.`titre` AS `oeuvre_titre`, 
`c`.`narrateur_id` AS `narrateur_id`, 
`f`.`nom` AS `narrateur_nom`, 
`c`.`titre` AS `titre`, 
`c`.`description` AS `description`, 
`c`.`ordre` AS `ordre`, 
`c`.`date_naine_debut` AS `date_naine_debut`, 
`c`.`date_naine_fin` AS `date_naine_fin`, 
count(`t`.`chapitre_id`) AS `nb_citations`, 
count(`fc`.`chapitre_id`) AS `nb_fiches` 
FROM `chapitres` `c` 
left join `oeuvres` `o` on `o`.`oeuvre_id` = `c`.`oeuvre_id`
left join `fiches` `f` on `f`.`fiche_id` = `c`.`narrateur_id`
left join `citations` `t` on `t`.`chapitre_id` = `c`.`chapitre_id` 
left join `fiches_chapitres` `fc` on `fc`.`chapitre_id` = `c`.`chapitre_id`  
group by `c`.`chapitre_id`;

