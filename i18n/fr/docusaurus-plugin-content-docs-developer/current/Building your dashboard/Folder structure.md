---
sidebar_position: 1
slug: ../building-your-dashboard/folder-structure
---

# Structure des dossiers

La première chose à faire est de vous familiariser avec la structure des fichiers et des dossiers du tableau de bord.

Pour commencer, veuillez lire la section [Structure des répertoires](https://laravel.com/docs/structure) de la documentation Laravel.

Bien qu'il existe divers répertoires pour organiser votre application, nous nous concentrerons principalement sur quelques-uns d'entre eux.
Ce seront les répertoires où vos fichiers de tableau de bord générés (tels que les indicateurs, etc.) seront placés.

- <span className='text--danger text--light'>app/Livewire</span> est le répertoire où tous vos fichiers d'indicateurs et de cartes de score seront stockés. Vous pouvez les organiser en sous-répertoires thématiques ou basés sur les sources de données (cela est réalisé en incluant des dossiers dans les noms lors de l'utilisation des différentes commandes make).

- <span className='text--danger text--light'>app/Mail</span> contient toutes les classes Mailable que vous pouvez modifier pour affecter les e-mails envoyés par le tableau de bord. Les modèles d'e-mails correspondants sont stockés dans <span className='text--danger text--light'>resources/views/mail</span>

- <span className='text--danger text--light'>app/MapIndicators</span> contient toutes les classes MapIndicator générées par la commande chimera:make-map-indicator.

- <span className='text--danger text--light'>app/Reports</span> est le répertoire où tous vos fichiers de classe de rapport seront stockés. Vous pouvez les organiser en sous-répertoires thématiques ou basés sur les questionnaires. Les sorties réelles (csv/excel) des rapports sont stockées dans le répertoire <span className='text--danger text--light'>storage</span>.

- <span className='text--danger text--light'>config</span> est le répertoire qui contient tous les fichiers de configuration qui contrôlent les divers aspects du tableau de bord. Vous n'avez presque jamais besoin de modifier directement ces fichiers. Vous devez plutôt utiliser le fichier <span className='text--danger text--light'>.env</span> situé à la racine pour définir divers types de paramètres requis par le tableau de bord.

- <span className='text--danger text--light'>resources/views</span> contient tous les modèles blade de l'application tableau de bord. Encore une fois, vous n'avez rarement besoin de modifier ces fichiers, mais il est bon de vous familiariser avec leur organisation.
