---
sidebar_position: 3
slug: ../building-your-dashboard/creating-scorecards
---

# Création de fiches de score
Les fiches de score sont destinées à afficher des données de très haut niveau qui concernent soit un indicateur important, soit une mesure de performance. Elles sont utiles à la direction pour la prise de décision et la résolution de problèmes.

## Commande Make scorecard
La seule et unique façon de créer des fiches de score est d'exécuter la commande `chimera:make-scorecard`.

Les fiches de score affichent généralement seulement deux choses : un titre et une valeur, mais peuvent également inclure un affichage de delta (pour montrer le pourcentage de changement par rapport à une valeur de référence) et un bouton de lien pour accéder à un indicateur, s'il existe.

![Fiches de score](/img/developer/building-your-dashboard/scorecards.png)

## Implémentation des fiches de score
Évidemment, vous devrez écrire du code dans votre fichier de fiche de score généré afin qu'il distille et retourne une valeur que vous souhaitez.

Vous avez une grande liberté sur la façon dont vous choisissez de coder votre fiche de score tant que, à la fin, vous définissez les propriétés de classe publiques appropriées avec leurs valeurs souhaitées. Vous devez retourner une Collection Laravel à partir de la méthode publique getData contenant deux éléments. Le premier étant la valeur à afficher et le second étant le changement de valeur (delta) par rapport à une référence. Si vous n'avez pas l'intention d'utiliser le delta, vous pouvez retourner null. La dernière ligne de votre méthode getData() pourrait ressembler à ce qui suit :

```php
return collect([$displayValue, $delta]);
```

- $this->title

    Le titre est par défaut hérité de ce que vous avez fourni lorsque vous avez créé la fiche de score. Vous pouvez également le modifier depuis le menu de gestion.

- $this->bgColor

    La couleur de fond de la fiche de score est dictée par le thème actuellement choisi, mais vous êtes libre de la remplacer et de définir votre propre couleur souhaitée en utilisant des constantes de couleur HTML ou des valeurs de couleur hexadécimales.

- $this->diff

    Par défaut, cela est défini sur 0, mais vous pouvez le définir sur n'importe quelle valeur entière (signée) pour représenter le delta entre la valeur principale et une valeur de référence.

- $this->unit

    Par défaut, cela est défini sur % et est affiché comme une unité pour votre delta (diff). Vous pouvez le remplacer par toute autre unité ou vous pouvez également le définir comme une chaîne vide.
