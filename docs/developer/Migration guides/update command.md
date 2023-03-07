---
sidebar_position: 1
slug: ../migration-guides/update-command
---

# The update command

The update command greatly aids in updating the version of Dashboard Starter Kit you are running.

```
php artisan chimera:update [options]
```

It has the following options, which you might use depending on what is recommended in the release notes for each update.

- *chimera-config* - will re-publish the chimera.php config file to the config directory
- migrations - will re-publish any new database migrations that might have been added to the kit since installation
- packages - will install any new composer packages that might have been added to the kit since installation
- jetstream-modifications - will re-publish customized Laravel Jetstream views and actions
- buildables - will re-publish resources (js, css, public images, tailwind.config.js and vite.config.js)
- stubs - will re-publish stubs used in the various chimera:make commands
- other-configs - will re-publish app, auth, and jetstream config files to the config directory
- npm - will update the application's package.json with required npm packages

In the example below, all js, css and image files will be published and this might be necessary if an update has modified any Javascript, CSS or added any new public image files.

```
php artisan chimera:update --buildables
```

:::caution
Please be aware that when you re-publish previously published resources, changes you might have made to those resources after installation will likely be overwritten. 
Under normal circumstances, you will likely not have modified any of these resources but be aware that this might happen.

For example, the --buildables option would overwrite the hero image on the landing page, if you have already replaced it with some other image.
:::