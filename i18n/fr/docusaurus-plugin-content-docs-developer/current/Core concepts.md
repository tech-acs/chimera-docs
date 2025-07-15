---
sidebar_position: 3
slug: /core-concepts
---

# Concepts fondamentaux

## Sources de données
Ce que nous appelons généralement une source de données dans le contexte de cette application est la base de données, qui provient généralement d'un questionnaire de recensement ou d'enquête. Dans le cas de CSPro, chaque application CAPI ou questionnaire aura sa propre base de données où les interviews (cas) reçues du terrain sont stockées.

Nous utilisons également le concept de source de données pour stocker d'autres métadonnées connexes telles que les dates de début et de fin de l'exercice, le nom de l'exercice, etc. C'est un concept crucial et fondamental dans notre implémentation de tableau de bord. Il est également parfois appelé questionnaire. En général, veuillez considérer les termes source de données et questionnaire comme interchangeables.

![Questionnaires](/img/developer/questionnaires.png)

## Cartes de synthèse
Les cartes de synthèse sont ce que nous utilisons pour afficher l'état général d'une source de données ou d'un exercice de collecte de données sur le terrain (recensement/enquête). Elles sont affichées sur la page d'accueil et montrent diverses statistiques générales telles que le nombre total d'interviews collectées, les dates de début et de fin de l'exercice, etc.

Chaque carte de synthèse peut également contenir diverses fiches de score qui affichent des statistiques provenant des données elles-mêmes, et vous pouvez avoir plusieurs cartes de synthèse sur la page d'accueil.

Les cartes de synthèse peuvent également contenir des indicateurs en vedette. Ce sont des indicateurs normaux qui ont été sélectionnés pour être affichés ici en raison de leur importance perçue.

![Cartes de synthèse](/img/developer/summary-card.png)

## Indicateurs
Les indicateurs sont généralement des éléments de données qui représentent des données statistiques pour un moment, un lieu et d'autres caractéristiques spécifiés. Ils sont principalement représentés graphiquement sous forme de types de graphiques courants tels que les barres, les lignes, les secteurs et autres.

Ils incluent également des métadonnées pour l'indicateur telles qu'une brève description, un titre et un texte étendu destiné à aider à comprendre ce qui est représenté par l'indicateur.

![Indicateurs](/img/developer/indicators.png)

## Pages
Une page est simplement un regroupement d'indicateurs en une seule page web accessible via la barre de navigation supérieure. Le même indicateur peut être présent dans plusieurs pages et les utilisateurs peuvent se voir accorder l'accès à des pages ou même à des indicateurs individuels.

## Indicateurs cartographiques
Les indicateurs cartographiques sont simplement des représentations cartographiques des indicateurs. Les données sont affichées sur des cartes. Les valeurs peuvent être affichées en survolant chaque limite et la couleur de remplissage de la limite indique également la plage dans laquelle la valeur se situe.

Une légende apporte de la clarté pour les plages de données.

![Indicateurs cartographiques](https://via.placeholder.com/728x90.png?text=Map+Indicator)
