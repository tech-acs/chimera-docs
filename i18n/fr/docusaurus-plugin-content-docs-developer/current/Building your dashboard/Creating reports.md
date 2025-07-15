---
sidebar_position: 7
slug: ../building-your-dashboard/creating-reports
---

# Création de rapports
Les rapports sont des ensembles de données tabulaires compilés et présentés sous forme de fichiers CSV ou Excel. Ils sont générés automatiquement selon un calendrier défini et peuvent également être envoyés automatiquement par e-mail aux utilisateurs désignés du tableau de bord.

## Commande make-report
La seule façon de créer des rapports est d'exécuter la commande `chimera:make-report`.

## Implémentation des rapports
Vous devrez évidemment écrire du code dans votre fichier de rapport généré afin qu'il interroge et retourne les données à inclure dans le fichier de rapport généré.

Vous devez implémenter la méthode getData() et vous assurer qu'elle retourne une Collection. Les clés de la collection deviendront les en-têtes de colonnes du tableau de rapport et les valeurs deviendront les lignes.
