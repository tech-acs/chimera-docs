---
sidebar_position: 4
slug: ../deployment-guide/running-queue-workers
---

# Exécution des travailleurs de file d'attente

Sur le serveur de production, vous devrez exécuter plusieurs travailleurs de file d'attente nécessaires pour traiter les différentes tâches en file d'attente que le tableau de bord générera.

Pour cela, nous utilisons Laravel Horizon.

Le kit contient des fichiers modèles de service Linux que vous pouvez utiliser directement pour installer le service Horizon.

Vous pouvez trouver le fichier dans le répertoire deploy. Il est nommé horizon.service
