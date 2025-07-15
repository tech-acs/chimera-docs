---
sidebar_position: 6
slug: ../deployment-guide/production-checklist
---

# Liste de contrôle de production

Le Dashboard Starter Kit est fourni avec une commande production-checklist qui exécute une série de vérifications et vous fournit un résultat de réussite/échec pour chacune.

```
php artisan chimera:production-checklist
```

Ces vérifications couvrent des paramètres importants, des configurations et plus encore, qui sont essentiels au bon fonctionnement du tableau de bord dans les environnements de production.

![production-checklist](/img/developer/deployment-guide/production-checklist.png)

Évidemment, si vous avez des vérifications échouées, vous devez les corriger jusqu'à ce que toutes les vérifications soient réussies.
