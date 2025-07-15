---
sidebar_position: 4
slug: ../getting-started/installation
---

# Installation

Étant donné que le Dashboard Starter Kit est conçu pour Laravel, vous devrez d'abord créer un nouveau projet Laravel.

Veuillez consulter la documentation Laravel [ici](https://laravel.com/docs/installation) pour savoir comment procéder.

:::info

Voici la version **TLDR** de la création d'un projet Laravel

Après avoir installé PHP et Composer, vous pouvez créer un nouveau projet Laravel via la commande `create-project` de Composer :

```
composer create-project laravel/laravel my-dashboard
```
:::

Une fois que vous avez créé le projet, vous pouvez utiliser Composer pour installer la dernière version du kit de démarrage dans votre nouveau projet Laravel :

```
composer require uneca/dashboard-starter-kit
```

Après avoir installé le package, vous pouvez exécuter la commande artisan chimera:install. Cette commande installera une suite d'outils et de fonctionnalités qui vous permettront de créer un tableau de bord moderne pour les recensements/enquêtes.

```
php artisan chimera:install
```

:::caution

** Uniquement pour les nouvelles applications **

Le Dashboard Starter Kit ne doit être installé que dans de nouvelles applications Laravel. Tenter de l'installer dans une application Laravel existante (modifiée ou non fraîchement installée) entraînera un comportement inattendu et des problèmes.
:::

Maintenant que vous avez créé votre application de tableau de bord, l'étape suivante consiste à éditer le fichier de configuration .env de votre application et à y mettre les bons paramètres pour votre base de données et les autres paramètres pertinents.

Pour continuer, vous devez d'abord créer une base de données PostgreSQL et ajouter les détails dans le fichier .env (voir ci-dessous). Veuillez également consulter la documentation Laravel pour savoir comment configurer une connexion à la base de données.

```
DB_CONNECTION=pgsql
DB_HOST=nom d'hôte ou adresse IP de votre base de données
DB_PORT=port de votre base de données (5432 est le port par défaut pour postgres)
DB_DATABASE=nom de votre base de données
DB_USERNAME=nom d'utilisateur de votre base de données
DB_PASSWORD=mot de passe de votre base de données
```

Pour une liste complète de toutes les variables d'environnement que vous pouvez configurer, veuillez consulter la section [Configuration](/docs/developer/getting-started/configuration).

Une fois que vous avez édité votre fichier .env, vous êtes prêt à exécuter les migrations de base de données :

```
php artisan migrate
```

À ce stade, vous êtes prêt à démarrer votre serveur, quel qu'il soit (commande artisan serve, nginx, WAMP, IIS, etc.) et à naviguer vers l'adresse web où vous verrez la page d'accueil.

La manière la plus rapide serait d'exécuter le serveur web intégré d'artisan comme ceci :

```
php artisan serve
```

Si tout se passe bien, vous devriez pouvoir naviguer vers *http://localhost:8000* et voir la page d'accueil

![Landing page](/img/developer/landing.png)

Enfin, vous pouvez exécuter la commande adminify pour créer un compte _Dashboard Manager_ avec lequel vous pourrez accéder à votre nouveau tableau de bord.

```
php artisan adminify
```
