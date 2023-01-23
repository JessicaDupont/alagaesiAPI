CREATE VIEW `v_oeuvres`  AS SELECT 
`o`.`oeuvre_id` AS `oeuvre_id`, 
o.oeuvre_precedente_id,
op.titre as oeuvre_precedente_titre,
`o`.`createur_id` AS `createur_id`, 
`p`.`prenom` AS `createur_prenom`, 
`p`.`nom` AS `createur_nom`, 
`o`.`type_oeuvre_id` AS `type_oeuvre_id`, 
`tyo`.`nom` AS `type_oeuvre_nom`, 
`tyo`.`description` AS `type_oeuvre_description`, 
`o`.`titre` AS `titre`, 
`o`.`date_creation` AS `date_creation`, 
`o`.`image_url` AS `image_url`, 
`o`.`resume` AS `resume`, 
count(`c`.`oeuvre_id`) AS `nb_chapitres`, 
count(`po`.`oeuvre_id`) AS `nb_personnes` 
FROM `oeuvres` `o` 
left join oeuvres op on op.oeuvre_id = o.oeuvre_precedente_id 
left join `personnes` `p` on`p`.`personne_id` = `o`.`createur_id`
left join `types_oeuvres` `tyo` on `tyo`.`type_oeuvre_id` = `o`.`type_oeuvre_id`
left join `chapitres` `c` on `c`.`oeuvre_id` = `o`.`oeuvre_id`
left join `personnes_oeuvres` `po` on `po`.`oeuvre_id` = `o`.`oeuvre_id`
GROUP BY `o`.`oeuvre_id`  ;
