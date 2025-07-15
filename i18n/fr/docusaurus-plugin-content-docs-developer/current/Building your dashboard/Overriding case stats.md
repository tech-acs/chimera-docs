---
sidebar_position: 4
slug: ../building-your-dashboard/overriding-case-stats
---

# Remplacement des statistiques de cas
Les CaseStats sont des statistiques de haut niveau sur le nombre et le type de cas/entretiens présents dans votre base de données. Ils peuvent être classés comme *complétés, partiels et doublons*.

Cette classification est liée à la manière dont les cas sont stockés dans CSPro et pourrait ne pas correspondre à la façon dont vous souhaitez résumer les entretiens dans votre base de données.

Vous pouvez remplacer cette implémentation par défaut basée sur CSPro et fournir votre propre type de CaseStats. Pour ce faire, créez simplement un nouveau composant Livewire et assurez-vous d'inclure les mots CaseStats dans le nom.

Vous devez ensuite étendre la classe CaseStats existante et remplacer soit uniquement la méthode getData(), où vous pouvez implémenter votre propre stratégie de comptage, soit également remplacer la méthode render() pour fournir votre propre vue blade à rendre.

Une fois que vous avez implémenté votre nouveau composant CaseStats, il devrait être disponible pour sélection dans le formulaire d'édition de source pour chaque source de données/questionnaire.

Lorsque vous remplacez l'une de ces deux méthodes, assurez-vous de retourner les résultats dans le format attendu. Vous pouvez vous référer au composant CaseStats existant pour cela.
