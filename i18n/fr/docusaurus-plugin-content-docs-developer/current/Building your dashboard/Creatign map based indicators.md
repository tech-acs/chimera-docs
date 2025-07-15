---
sidebar_position: 8
slug: ../building-your-dashboard/creating-map-based-indicators
---

# Création d'indicateurs cartographiques

# Création d'indicateurs cartographiques
Les indicateurs cartographiques peuvent être créés de la même manière que les indicateurs graphiques. Une fois créés, implémentés et publiés, ils seront disponibles sur la page Carte. Les données seront affichées sur une carte spatiale.

## Commande make-map-indicator
La seule façon de créer des indicateurs cartographiques est d'exécuter la commande `chimera:make-map-indicator`. Cette commande utilise le modèle inclus et crée le fichier de classe MapIndicator dans le dossier *app/MapIndicators*.

## Implémentation des indicateurs cartographiques
Vous devrez évidemment écrire du code dans votre fichier d'indicateur cartographique généré afin qu'il interroge et retourne les données à afficher sur la carte.

Vous devez implémenter la méthode getData() et vous assurer qu'elle retourne une Collection. Vous devez avoir au moins ces deux clés dans votre collection :

- area_code
- value

De plus, si vous incluez les deux suivants, des fonctionnalités supplémentaires seront débloquées :

- display_value
- info

Le texte contenu dans la colonne *display_value* remplacera celui de value dans l'infobulle de la carte. Et si *info* est présent, son contenu sera affiché dans une boîte d'information en bas à droite de la carte lorsque la zone correspondante est cliquée.

La colonne/clé area_code est utilisée pour faire correspondre la zone sur la carte. La colonne value est ce qui est affiché pour chaque zone lors du survol, et enfin la colonne info doit contenir le texte affiché (dans une boîte d'information sur le côté) lorsque la zone correspondante est cliquée sur la carte.

Si, pour une raison quelconque, vous devez utiliser d'autres noms pour ces trois colonnes, vous pouvez le faire. Il suffit de remplacer les valeurs par défaut attribuées aux propriétés publiques de votre classe MapIndicator. Les propriétés et leurs valeurs par défaut sont :

```php
public string $valueField = 'value';
public string $displayValueField = 'display_value';
public string $areaCodeField = 'area_code';
public string $infoTextField = 'info';
```

