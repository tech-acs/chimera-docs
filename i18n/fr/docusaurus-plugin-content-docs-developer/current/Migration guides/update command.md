---
sidebar_position: 1
slug: ../migration-guides/update-command
---

# La commande de mise à jour

La commande de mise à jour facilite grandement la mise à jour de la version du Dashboard Starter Kit que vous utilisez.

```
php artisan chimera:update [options]
```

Elle propose les options suivantes, que vous pouvez utiliser en fonction des recommandations des notes de version pour chaque mise à jour.

- --all : exécute toutes les tâches (c'est presque comme une nouvelle installation et il est peu probable que vous l'utilisiez)
- --chimera-config : republiera le fichier de configuration chimera.php dans le répertoire de configuration. Cela est nécessaire dans les cas où nous ajoutons une nouvelle configuration à l'avenir
- --migrations : republiera toutes les nouvelles migrations de base de données qui pourraient avoir été ajoutées au kit depuis l'installation
- --packages : installera tous les nouveaux packages composer qui pourraient avoir été ajoutés au kit depuis l'installation
- --jetstream-modifications : republiera les vues et actions personnalisées de Laravel Jetstream
- --assets : republiera les ressources (js, css, stubs, tailwind.config.js et vite.config.js)
- --color-palettes : republiera le répertoire des palettes de couleurs
- --stubs : republiera les stubs utilisés dans les différentes commandes chimera:make
- --npm : mettra à jour le fichier package.json de l'application avec les packages npm requis
- --copy-env : publiera les fichiers .env.example et .env et générera une nouvelle clé d'application

Dans l'exemple ci-dessous, tous les fichiers js, css et image seront publiés, ce qui pourrait être nécessaire si une nouvelle version a modifié des fichiers Javascript, CSS ou stubs.

```
php artisan chimera:update --assets
```

:::caution
Veuillez noter que lorsque vous republiez des ressources précédemment publiées, les modifications que vous pourriez avoir apportées à ces ressources après l'installation seront probablement écrasées.
Dans des circonstances normales, vous n'aurez probablement pas modifié ces ressources, mais soyez conscient que cela pourrait arriver.

Par exemple, l'option --copy-env écraserait le fichier .env précédent. Si vous avez des identifiants dans ce fichier que vous n'avez pas sauvegardés ailleurs, ils seront perdus.
:::
