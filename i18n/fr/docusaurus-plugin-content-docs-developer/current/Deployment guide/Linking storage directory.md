---
sidebar_position: 5
slug: ../deployment-guide/linking-storage-directory
---

# Liaison du répertoire de stockage

Les fichiers sont par défaut stockés dans le répertoire *storage/app*. Cela empêche les fichiers d'être accessibles publiquement (c'est-à-dire que toute personne accédant à vos fichiers sur Internet sans autorisation).

Pour afficher correctement les fichiers dans notre application à partir du répertoire de stockage, nous allons créer un lien symbolique vers le répertoire public en utilisant la commande artisan suivante :

```
php artisan storage:link
```

Par exemple, les photos de profil sont stockées dans le répertoire de stockage et, sauf si vous avez créé le lien symbolique, les photos de profil ne seront pas visibles.

Veuillez consulter la [section pertinente](https://laravel.com/docs/9.x/filesystem#the-public-disk) de la documentation Laravel pour en savoir plus.
