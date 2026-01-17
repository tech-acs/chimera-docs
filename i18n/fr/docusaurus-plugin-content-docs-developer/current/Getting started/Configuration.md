---
sidebar_position: 5
slug: ../getting-started/configuration
---

# Configuration

## Variables d'environnement
Il existe quelques variables d'environnement que vous pouvez définir/modifier pour contrôler divers aspects du tableau de bord.

### Base de données et file d'attente
Principalement, vous aurez déjà défini les variables de connexion à la base de données :
- DB_CONNECTION=pgsql
- DB_HOST=nom d'hôte ou adresse IP de votre base de données
- DB_PORT=port de votre base de données (5432 est la valeur par défaut)
- DB_DATABASE=nom de votre base de données
- DB_USERNAME=nom d'utilisateur de votre base de données
- DB_PASSWORD=mot de passe de votre base de données

En outre, vous devez également définir les variables suivantes :

- APP_NAME="Nom/titre préféré de votre tableau de bord"
- QUEUE_CONNECTION=redis


### Messagerie {#mail}
Vous devez également configurer les détails du serveur de messagerie si vous avez accès à Internet depuis le tableau de bord et que vous souhaitez envoyer des e-mails (tels que des invitations à l'inscription, etc.) :
- MAIL_MAILER=smtp
- MAIL_HOST=mailhog
- MAIL_PORT=1025
- MAIL_USERNAME=null
- MAIL_PASSWORD=null
- MAIL_ENCRYPTION=null
- MAIL_FROM_ADDRESS="hello@example.com"
- MAIL_FROM_NAME=""

### Fonctionnalités du tableau de bord
Les variables d'environnement suivantes peuvent être définies pour affecter divers aspects du tableau de bord. Vous pouvez également définir cela et l'élément suivant depuis le menu de gestion de l'interface utilisateur web.
- APP_OWNER_NAME=ECA

  définissez cela à l'organisation qui possède le tableau de bord. Utilisé dans le pied de page affiché sur toutes les pages (par défaut ECA)

- APP_OWNER_URL=#

  définissez cela à l'URL (site web) de l'organisation qui possède le tableau de bord. Utilisé dans le pied de page affiché sur toutes les pages (par défaut #)

- CACHE_TTL_SECONDS=1800

  définissez cela au nombre de secondes pendant lesquelles vous souhaitez que les résultats des requêtes de la base de données soient mis en cache (par défaut 60 * 30 ; trente minutes)

- APP_TIMEZONE=UTC

  définissez cela au fuseau horaire où l'exercice de recensement/enquête a lieu (par défaut UTC). Vous ne devez utiliser que des fuseaux horaires valides comme indiqué dans la documentation php [ici](https://www.php.net/manual/fr/timezones.php)

- SECURE=false

  définissez cela à true ou false selon que vous avez activé https sur le serveur web du tableau de bord (par défaut false)

- INDICATORS_PER_PAGE=2

  définissez cela à un nombre entier pair qui contrôle le nombre d'indicateurs affichés par page (par défaut 2)

- EMAILING_ENABLED

  définissez cela à true si vous souhaitez envoyer des e-mails via le système (par défaut false)

- ENFORCE_2FA=false

  définissez cela à true pour exiger que les utilisateurs activent et utilisent l'authentification à deux facteurs (par défaut false)

- INVITATION_TTL_HOURS=72

  définissez cela au nombre d'heures pendant lesquelles les liens d'inscription des utilisateurs sont valides (par défaut 72)

- REQUIRE_ACCOUNT_APPROVAL=false

  définissez cela à true pour exiger que tous les comptes soient approuvés par le gestionnaire du tableau de bord avant de pouvoir être utilisés (par défaut false)

- RECORDS_PER_PAGE=20

  définissez cela à un nombre entier qui contrôle le nombre de lignes affichées dans les différents tableaux du tableau de bord (par défaut 20)
