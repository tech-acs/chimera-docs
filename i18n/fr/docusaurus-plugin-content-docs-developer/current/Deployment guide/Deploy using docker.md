---
sidebar_position: 2
slug: ../deployment-guide/deploy-using-docker
---

# Déploiement avec Docker

Le kit de démarrage fournit un environnement Docker pour votre tableau de bord. En dehors de Docker, aucun logiciel ou bibliothèque n'est requis sur votre machine. Une fois le package chimera installé, vous pouvez exécuter la commande artisan chimera:dockerize. Cette commande publiera un fichier docker-compose.yml et des fichiers de configuration d'exécution à la racine de votre application.

```bash
php artisan chimera:dockerize
```
Pour construire l'image du conteneur du tableau de bord, utilisez :

```bash
docker-compose build
```

Enfin, vous pouvez démarrer les conteneurs Docker en utilisant :

```bash
docker-compose up
```

Vous pouvez exécuter la commande php artisan migrate en utilisant cette commande :

```bash
docker-compose exec chimera.web php artisan migrate
```

Vous pouvez exécuter la commande adminify pour créer un utilisateur super admin avec lequel vous pourrez accéder à votre nouveau tableau de bord :

```bash
docker-compose exec chimera.web php artisan adminify
```
