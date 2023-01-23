CREATE VIEW `v_personnes`  AS SELECT 
`p`.`personne_id` AS `personne_id`, 
`p`.`prenom` AS `prenom`, 
`p`.`nom` AS `nom`, 
concat_ws(' ',`p`.`prenom`,`p`.`nom`) AS `nom_complet`, 
`p`.`date_de_naissance` AS `date_de_naissance`, 
`p`.`lieu_de_naissance` AS `lieu_de_naissance`, 
count(`po`.`personne_id`) AS `nb_oeuvres` 
FROM `personnes` `p` 
left join `personnes_oeuvres` `po` on `po`.`personne_id` = `p`.`personne_id`
GROUP BY `p`.`personne_id``personne_id`  ;