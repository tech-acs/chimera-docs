---
sidebar_position: 3
slug: ../getting-started/environment-setup
---

# Configuration de l'environnement

## Système d'exploitation de développement
Nous recommandons fortement de développer et de déployer le tableau de bord sur un ordinateur exécutant un système d'exploitation Linux. De préférence, la dernière version LTS d'[Ubuntu](https://ubuntu.com/about/release-cycle).

Et comme serveur web, Nginx.

## Dépendances
- Php 8.2
- [Composer](https://getcomposer.org/)
- Diverses extensions php telles que :
    - Extension PHP BCMath
    - Extension PHP Ctype
    - Extension PHP cURL
    - Extension PHP DOM
    - Extension PHP Fileinfo
    - Extension PHP JSON
    - Extension PHP Mbstring
    - Extension PHP OpenSSL
    - Extension PHP PCRE
    - Extension PHP PDO
    - Extension PHP Redis
    - Extension PHP Tokenizer
    - Extension PHP XML
    - Extension d'internationalisation (Intl)
- Sur Ubuntu, la commande suivante installera php et toutes les extensions requises :

  ```sudo apt install -y php8.3 php8.3-fpm php8.3-pgsql php8.3-zip php8.3-xml php8.3-intl php8.3-redis php8.3-sqlite3```
- [PostgreSQL](https://www.postgresql.org/)
