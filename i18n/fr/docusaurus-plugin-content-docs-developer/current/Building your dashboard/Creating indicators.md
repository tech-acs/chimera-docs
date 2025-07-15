---
sidebar_position: 5
slug: ../building-your-dashboard/creating-indicators
---

# Création d'indicateurs

Maintenant que vous avez configuré vos paramètres de base, vous pouvez commencer à créer des indicateurs. La création d'indicateurs implique l'exécution d'une commande chimera (interactive) en ligne de commande et aboutira à la création d'un fichier (classe de composant) et à l'ajout d'entrées dans la base de données pour les indicateurs créés, y compris les autorisations.

Le fichier d'indicateur créé contiendra les éléments de base d'un indicateur, et il étend la classe de base Chart, mais nécessitera toujours que vous écriviez du code PHP pour implémenter complètement votre indicateur.

## Commande Make indicator
La seule et unique façon de créer des indicateurs est d'exécuter la commande `chimera:make-indicator`.

La commande est interactive et vous permet de contrôler divers aspects du fichier généré.

Vous pouvez choisir d'inclure du code d'exemple fonctionnel dans le fichier généré afin de voir immédiatement des indicateurs réalistes dans votre tableau de bord.

Vous pouvez également choisir d'utiliser des modèles d'indicateurs qui ont déjà été partiellement construits par nous (et, espérons-le, par d'autres contributeurs ou vous-même en utilisant l'outil de création de graphiques que nous incluons).

```
php artisan chimera:make-indicator
```

:::caution
Veuillez faire particulièrement attention lorsque vous fournissez un nom pour votre indicateur. C'est ce qui deviendra à la fois le nom de la classe et du fichier pour votre indicateur et créera des répertoires si vous le spécifiez.
Veuillez lire attentivement les instructions et les exemples sur la ligne de commande.
:::

Par exemple, ce qui suit entraînera la création d'un dossier appelé Enumeration dans le répertoire <span className='text--danger text--light'>app/Livewire</span> et d'un fichier nommé *HouseholdsEnumerated.php* à l'intérieur du répertoire Enumeration.

![Exemple de commande Make indicator](/img/developer/building-your-dashboard/make-indicator-command.png)

## Modèles d'indicateurs
Les modèles d'indicateurs sont des implémentations partielles d'indicateurs courants tels que la pyramide des âges, la taille des ménages, le ratio hommes/femmes, etc.

Nous inclurons probablement des modèles d'indicateurs "prêts à l'emploi" avec chaque installation du kit de démarrage. Vous pouvez également "enregistrer comme modèle" l'un des indicateurs que vous créez via l'outil de conception de graphiques, et tous les modèles seront disponibles pour une utilisation lors de l'utilisation de la commande make-indicator, comme indiqué dans la capture d'écran ci-dessus.

Ce que les modèles d'indicateurs vous offrent, c'est la conception du graphique. Vous devez toujours implémenter la méthode getData(), qui est celle qui récupère et retourne les données de la base de données.
