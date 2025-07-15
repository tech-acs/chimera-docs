---
sidebar_position: 3
slug: ../deployment-guide/migrating-data
---

# Migration des données

Lorsque vous développez votre tableau de bord en utilisant des outils tels que les différentes commandes make, les données seront insérées dans la base de données postgres.
Lorsque vous êtes prêt pour le déploiement, vous pouvez utiliser les commandes data-export et data-import pour migrer les données de votre machine de développement vers le serveur de production.

```
php artisan chimera:data-export
```

L'exécution de la commande ci-dessus générera un fichier nommé *data-export.sql*. Il contient les parties pertinentes de votre base de données postgres (certaines tables uniquement).
Vous pouvez enregistrer ce fichier dans git afin qu'il soit disponible sur votre serveur de production.

Et sur votre serveur de production, vous pouvez exécuter la commande suivante pour importer les données que vous avez exportées sur votre serveur de développement. Si elle rencontre des données qui ont déjà été insérées, elles seront ignorées.

Pour connaître toutes les options offertes par cette commande, vous pouvez l'exécuter avec l'option --help qui affichera une liste exhaustive de toutes les options disponibles et de leurs significations.

```
php artisan chimera:data-import
```

:::info

Pour utiliser ces deux commandes, vous devrez avoir le *Client PostgreSQL* installé sur le système (pas le serveur PostgreSQL lui-même, juste le client).

chimera:data-export utilise **pg_dump** et chimera:data-import utilise **psql**

Sur Ubuntu, vous installeriez le client PostgreSQL comme suit :

```
sudo apt install postgresql-client
```
