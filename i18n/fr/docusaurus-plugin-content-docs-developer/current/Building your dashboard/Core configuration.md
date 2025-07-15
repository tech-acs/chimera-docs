---
sidebar_position: 2
slug: ../building-your-dashboard/core-configuration
---

# Configuration principale

Maintenant que vous avez créé un nouveau tableau de bord, il est temps de le remplir avec des indicateurs et tout ce qui en fait un outil utile.

La première chose à mettre en place est la configuration principale.

Il s'agit de :

- Paramétrage de la source de données
- Configuration de la hiérarchie des zones
- Importation des zones
- Importation des valeurs de référence

## Sources de données/questionnaires

Votre tableau de bord peut se connecter à plusieurs sources de données (bases de données) et votre recensement/enquête n'a pas besoin d'utiliser CSPro. Notre tableau de bord fonctionne avec tout type de données dans toute base de données compatible avec Laravel.

Par défaut, nous prenons en charge les bases de données MySQL, MariaDB, Microsoft SQL, PostgreSQL et SQLite comme sources de données.

Si vous êtes connecté avec un compte de type 'Manager/Super Admin', vous pouvez accéder directement au menu 'Gestion' (voir capture ci-dessous) dans votre tableau de bord et commencer à ajouter des sources de données.

![Menu Gestion](/img/developer/building-your-dashboard/management-menu.png)

Pour créer une source de données, vous devez fournir deux ensembles d'informations. Le premier concerne l'exercice de recensement/enquête et le second la base de données où les données sont stockées.

![Menu Gestion](/img/developer/building-your-dashboard/create-questionnaire.png)

:::info
Pour pouvoir appliquer les configurations principales, vous devez activer le mode _développeur_ &#128736;

Le mode développeur ne peut être activé que si vous êtes connecté avec un compte _Super Admin_. Pour l'activer, allez sur la page de profil utilisateur et tapez/cliquez sept fois dans la petite zone vide juste au-dessus du premier séparateur horizontal.

Une fois activé, il le restera uniquement pour la session en cours et peut être désactivé manuellement après avoir appliqué les configurations souhaitées.
:::
