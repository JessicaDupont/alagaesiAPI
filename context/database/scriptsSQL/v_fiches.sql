CREATE VIEW `v_fiches`  AS SELECT 
`f`.`fiche_id` AS `fiche_id`, 
`f`.`type_fiche_id` AS `type_fiche_id`, 
`tf`.`nom` AS `type_fiche_nom`, 
`tf`.`description` AS `type_fiche_description`, 
`f`.`nom` AS `nom`, 
`f`.`description` AS `description`, 
`f`.`date_naine` AS `date_naine`, 
`f`.`date_debut` AS `date_debut`, 
`f`.`date_fin` AS `date_fin`, 
count(`fc`.`fiche_id`) AS `nb_chapitres`, 
count(`c`.`narrateur_id`) AS `nb_chapitres_narrateur`, 
count(`t`.`auteur_id`) AS `nb_citations_auteur`, 
count(`ff1`.`fiche_id_1`) + count(`ff2`.`fiche_id_2`) AS `nb_fiches`, 
count(`fi`.`fiche_id`) AS `nb_informations` 
FROM `fiches` `f` 
left join `types_fiches` `tf` on `tf`.`type_fiche_id` = `f`.`type_fiche_id`
left join `chapitres` `c` on `c`.`narrateur_id` = `f`.`fiche_id`
left join `citations` `t` on `t`.`auteur_id` = `f`.`fiche_id`
left join `fiches_chapitres` `fc` on `fc`.`fiche_id` = `f`.`fiche_id`
left join `fiches_fiches` `ff1` on `ff1`.`fiche_id_1` = `f`.`fiche_id` 
left join `fiches_fiches` `ff2` on `ff1`.`fiche_id_2` = `f`.`fiche_id`
left join `fiches_informations` `fi` on `fi`.`fiche_id` = `f`.`fiche_id`
GROUP BY `f`.`fiche_id`  ;
