# README - TP01 - Gestionnaire de produits 

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** Xavier Lepage
> **Repo GitHub :** appweb-trpr01
> **Déploiement (GitHub Pages) :** `https://xavier-lepage.github.io/appweb-trpr01/`

---
**IMPORTANT**: renommer README.md
## 1) Description du projet

Décrire en 5–10 lignes l’application réalisée :  

- Contexte : Créer un gestionnaire de produits.
- Objectif principal : Faciliter la gestion d'inventaire pour des commerces de composants d'informatique grand public et les individus prenant part en construction d'ordinateurs, notamment sur demande.
- Public cible / usage typique : L'application est recommandée pour tout individu prenant part en gestion de son inventaire de composants informatiques.
- L'application permet de maintenir une liste de produits et permet de l'exporter sous format CSV si désiré. 
	- Il n'est pas encore possible d'importer un fichier CSV pour charger une liste de produit. 
	- L'application ne permet pas non plus la sauvegarde automatique dans le stockage du navigateur, ni dans une base de données.
	- Les autres fonctionnalités incluent la liste, la recherche, l'édition, la duplication et la suppression.
	- Les produits ont un indicateur du niveau d'inventaire avec code de couleur et il est possible d'afficher les détails d'un produit en cliquant sur celui-ci.
	- Des alertes sont également affichées pour les produits dont le niveau d'inventaire est critique.

**Produit choisi :** Composants informatiques

---

## 2) Fonctionnalités (récits utilisateurs)

- [x] 1. Je peux ajouter un nouveau produit.
	- Remplir un formulaire et cliquer sur "Ajouter".
	- Validation des champs obligatoires.
- [x] 2. Je peux modifier un produit existant.
	- Bouton "Modifier" qui prérempli un nouveau formulaire avec les données du produit sélectionné.
- [x] 3. Je peux dupliquer un produit existant pour en créer un nouveau rapidement.
	- Bouton "Dupliquer" qui prérempli un nouveau formulaire avec les données du produit sélectionné (excluant l'ID).
- [x] 4. Je peux supprimer un produit.
	- Confirmer la suppression après avoir cliqué sur le bouton "Supprimer" avec une fenêtre modale.
- [x] 5. Je peux consulter a liste des produits.
	- Affichage conditionnel sous forme de tableau.
- [x] 6. Je peux rechercher un produit par son nom.
	- Champ de recherche dynamique avec mise à jour instantanée des résultats.
- [x] 7. Je peux voir les détails d'un produit.
	- Cliquer sur un produit affiche ses détails (nom, description, prix, stock).
- [x] 8. Je peux voir les quantités disponibles d'un produit.
	- Affichage en temps réel des quantités avec indicateur visuel (couleurs).
- [x] 9. Je peux être averti lorsqu'un produit est en rupture de stock.
	- Notification (message / toast / snackbar) lorsqu'un produit atteint un stock critique (inférieur ou égal à 3).
- [x] 10. Je peux exporter la liste des produits en CSV.
	- Bouton "Exporter" permettant de télécharger la liste en format CSV.

---

## 3) Technologies utilisées

- Vue.js 3
- Node.js
- TypeScript
- Bootstrap

---

## 4) Installation et démarrage

### Prérequis
- Node.js LTS

### Installation
> **Note:** les commandes suivantes devraient être effectuées dans un terminal selon le contexte d'installation désiré (Git Bash recommandé):

Installation des dépendances localement:
```bash
npm install
```

### Démarrage en dev
Démarrer un serveur Web local pour le développement:
```bash
npm run dev
```

### Build
Installation en vue de déploiement:
```bash
npm install
npm run build
```

---

## 5) Déploiement (GitHub Pages)

- **Nom du repo / dossier GitHub Pages:** `appweb-trpr01`
- **URL:** `https://xavier-lepage.github.io/appweb-trpr01/`

### Notes de configuration

- Base URL (`base`) de Vite ajustée pour GitHub Pages
- Commandes utilisées pour déployer (si script)

---

## 6) Architecture et organisation du code

### Structure des dossiers

- `src/components/` : Composants UI (responsabilité unique)
- `src/models/` : Types/interfaces TypeScript (ex. `Product`)
- `src/services/` : Logique utilitaire (ex. export CSV)
- `src/assets/icons/` : Icônes utilisées par l'application
- `src/assets/images/` : Images utilisées par l'application (incluant le logo)
- `src/styles/` : Fichiers CSS
- `src/scripts` : Fichiers TypeScript

### Composants clés

- `App` : Composant principal pour monter l'application.
- `MainMenu` : Menu principal avec boutons pour accéder aux fonctionnalités.
- `Header` : En-tête de l'application qui comprend son logo et son nom.
- `ProductForm` : Formulaire d'ajout, d'édition et de duplication de produit.
- `ProductDisplay` : Affiche les informations liées à un produit à l'écran et offre des options pour dupliquer, éditer ou supprimer le produit lié.
- `ProductList` : Liste des produits, contient des `ProductDisplay` et une `SearchBar` pour filtrer les produits.
- `SearchBar` : Barre de recherche avec libellé, icône et événement lors de changement à la requête.
- `StockIndicator` : Indicateur de niveau d'inventaire avec code de couleur.
- `StockAlert` : Message d'alerte de faible niveau d'inventaire de produit.
---

## 7) Utilisation de l’IA (OBLIGATOIRE)

> **IMPORTANT :** Toute omission d’utilisation d’IA (même pour UI / CSS) peut entraîner **0** et une mention de plagiat.

### Outil(s) utilisé(s)

- Aucun.

### Comment l’IA a été utilisée

L'IA n'a pas été utilisée.
