CREATE  VIEW `v_citations`  AS SELECT 
`t`.`citation_id` AS `citation_id`, 
`t`.`chapitre_id` AS `chapitre_id`, 
`c`.`titre` AS `chapitre_titre`, 
`t`.`auteur_id` AS `auteur_id`, 
`f`.`nom` AS `auteur_nom`, 
`t`.`titre` AS `titre`, 
`t`.`description` AS `description`, 
`t`.`ordre` AS `ordre`, 
`t`.`date_naine` AS `date_naine` 
FROM `citations` `t` 
left join `chapitres` `c` on `c`.`chapitre_id` = `t`.`chapitre_id` 
left join `fiches` `f` on `f`.`fiche_id` = `t`.`auteur_id`
group by  `t`.`citation_id` ;