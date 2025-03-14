# SpaceX Launch Viewer

## Description
Ce projet est une application web qui affiche les lancements à venir et récents de SpaceX. Il est construit avec Vue.js et utilise une API pour récupérer les données les plus récentes sur les lancements de SpaceX. L'application affiche les détails du prochain lancement, une liste des lancements récents, et un modal avec des informations supplémentaires pour chaque lancement.

## Fonctionnalités
- Affiche les détails du prochain lancement SpaceX, y compris le nom et la date du lancement.
- Affiche une liste des lancements SpaceX récents.
- En cliquant sur une carte de lancement, un modal s'ouvre pour afficher des informations détaillées sur ce lancement.

## Technologies utilisées
- **Vue.js** (avec Composition API)
- **TypeScript**
- **CSS** (pour le style)
- **API SpaceX** (pour récupérer les données des lancements)

## Installation
Pour exécuter le projet localement :

1. Clonez le dépôt :

    ```bash
    git clone <votre-url-de-depot>
    ```

2. Accédez au dossier du projet :

    ```bash
    cd space-x-launch-viewer
    ```

3. Installez les dépendances :

    ```bash
    npm install
    ```

4. Démarrez le serveur de développement :

    ```bash
    npm run dev
    ```

L'application sera disponible à l'adresse [http://localhost:3000](http://localhost:3000).

## Utilisation
Une fois le projet configuré et l'application lancée localement, celle-ci récupérera automatiquement les informations sur les lancements à venir et récents via l'API SpaceX.

- Le prochain lancement sera affiché en haut de la page, avec son nom et sa date.
- La section des lancements récents affichera les 10 derniers lancements SpaceX.
- En cliquant sur une carte de lancement, un modal s'ouvrira pour afficher des informations détaillées sur ce lancement.

## Code source
Le code source complet de ce projet est disponible dans le dépôt.

## Dépôt GitHub
[GitHub Repository Link](https://github.com/SamahFarez/SpaceX_Stage)

## Guide de déploiement sur Netlify
Voici comment déployer l'application sur Netlify :

1. Poussez votre code sur GitHub (si ce n'est pas déjà fait).
2. Allez sur Netlify et connectez-vous avec votre compte.
3. Cliquez sur "New site from Git" et connectez votre compte GitHub.
4. Sélectionnez le dépôt que vous souhaitez déployer.
5. Netlify va automatiquement détecter que vous utilisez Vue.js, mais assurez-vous de configurer les paramètres suivants :
    - Commande de build : `npm run build`
    - Dossier de publication : `dist`
6. Cliquez sur **Deploy Site** pour lancer le déploiement.
7. Une fois le déploiement terminé, Netlify vous fournira une URL unique où votre application sera en ligne.

## Difficultés rencontrées
- **Gestion de l'état global** : Nous avons dû utiliser des références réactives (`ref`) pour gérer l'état de l'application (par exemple, pour la sélection du lancement ou pour récupérer les données de l'API).
- **Mise à jour des données** : Intégrer l'API de SpaceX a parfois été complexe car la structure des données changeait légèrement selon les types de lancement (missions réussies ou annulées).
- **Affichage du modal** : Gérer l'ouverture et la fermeture du modal était une tâche délicate, surtout pour s'assurer que l'affichage était fluide et sans bogues visuels.

## Choix techniques
- **Vue.js avec Composition API** : Nous avons choisi Vue.js pour sa simplicité et sa flexibilité, en particulier la Composition API qui permet de mieux organiser les composants et les comportements réutilisables.
- **TypeScript** : Nous avons utilisé TypeScript pour sa capacité à détecter les erreurs de types à la compilation, ce qui nous a permis d'améliorer la qualité du code.
- **API SpaceX** : Nous avons utilisé l'API publique de SpaceX pour récupérer les informations sur les lancements. Elle est gratuite et offre toutes les données nécessaires pour ce projet.

## Ressources utilisées
- **API SpaceX** : [https://api.spacexdata.com](https://api.spacexdata.com)
- **Documentation Vue.js** : [https://vuejs.org](https://vuejs.org)
- **Documentation TypeScript** : [https://www.typescriptlang.org](https://www.typescriptlang.org)
