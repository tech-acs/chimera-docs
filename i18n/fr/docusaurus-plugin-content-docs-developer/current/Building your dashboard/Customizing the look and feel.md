---
sidebar_position: 9
slug: ../building-your-dashboard/customizing-the-look-and-feel
---

# Personnalisation de l'apparence

## Changer le logo

Il existe deux ressources différentes qui contrôlent les graphiques du logo utilisés dans le tableau de bord.

L'une pour la page de connexion (<span className='text--success text--light'>resources/views/vendor/jetstream/components/authentication-card-logo.blade.php</span>) et l'autre pour tout le reste (<span className='text--success text--light'>resources/views/vendor/jetstream/components/application-mark.blade.php</span>)

En modifiant le contenu de ces deux fichiers, vous pouvez changer les graphiques du logo. Ces deux ressources sont en code SVG et nous vous conseillons de les remplacer par le code SVG de votre logo ou un fichier au format SVG de votre logo.

Pour changer l'image principale sur la page d'accueil (page de bienvenue), remplacez simplement le fichier (<span className='text--success text--light'>public/images/hero.jpg</span>) par un fichier du même nom.

Vous pouvez également contrôler la couleur des graphiques, des cartes de score et d'autres éléments graphiques du tableau de bord en créant votre propre thème. Les thèmes sont détaillés dans la section **Sujets avancés**.
