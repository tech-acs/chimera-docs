---
sidebar_position: 2
slug: ../advanced-topics/caching
---

# Mise en cache

Le Dashboard Starter Kit intègre une stratégie de mise en cache complète.

La mise en cache des résultats se fait toujours en arrière-plan. Chaque indicateur publié, carte de score, statistique de cas et indicateur cartographique sera mis en cache pendant une durée déterminée par le paramètre CACHE_TTL_SECONDS dans votre fichier .env. La valeur par défaut est **trente minutes**.

Vous souhaiterez probablement utiliser votre propre stratégie de cache adaptée à la taille de vos données et à vos besoins. Vous devrez donc planifier des tâches pour mettre à jour ces caches régulièrement. Cela se fait via le groupe de commandes ```chimera:cache```. Vous pouvez les exécuter manuellement, mais il est recommandé de les planifier avec les tâches programmées de Laravel. Les données mises en cache avec ces commandes ne expirent pas. Elles sont mises en cache *"pour toujours"* et la stratégie de remplacement du cache est laissée au développeur, qui doit la gérer via une planification réfléchie des commandes de cache.

Pour plus de détails, consultez la section [Planification des tâches](https://laravel.com/docs/9.x/scheduling#scheduling-artisan-commands) de la documentation Laravel.

```php
$schedule->command('chimera:cache --data-source=enumeration')->everySixHours();
```

En résumé, ajoutez ce type de code à la méthode schedule() de votre fichier de classe ```App\Console\Kernel``` pour chacune de vos commandes de cache.

```
php artisan chimera:cache-indicators
php artisan chimera:cache-scorecards
php artisan chimera:cache-mapindicators
php artisan chimera:cache-casestats
```

### chimera:cache-indicators

La commande possède trois options pour contrôler la mise en cache :

- *max-level* : cette option permet de contrôler la profondeur de mise en cache des indicateurs. Par défaut, seuls les niveaux national et le premier niveau de zone sont mis en cache. Accepte un nombre entre 1 et le nombre total de hiérarchies de zones que vous avez.

- *data-source* : cette option permet de mettre à jour le cache des indicateurs appartenant à une source de données spécifique. Par défaut, les indicateurs de toutes les sources de données seront mis à jour.

- *tag* : cette option cible spécifiquement les indicateurs ayant le tag donné, en excluant tous les autres indicateurs non tagués.

Exemple : la première commande mettra à jour tous les indicateurs (publiés et non tagués), la seconde mettra à jour tous les indicateurs (publiés et non tagués) du questionnaire "enumeration" et la troisième mettra à jour les indicateurs ayant le tag 'priority'.
