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

- Contexte : 
- Objectif principal : Faciliter la gestion d'inventaire pour des commerces de composants d'informatique grand public et les individus prenant part en construction d'ordinateurs, notamment sur demande.
- Public cible / usage typique : L'application est recommandée pour tout individu prenant part en gestion de son inventaire de composants informatiques.

**Produit choisi :** Composants informatiques

---

## 2) Fonctionnalités (récits utilisateurs)

- [ ] 1. Je peux ajouter un nouveau produit.
	- Remplir un formulaire et cliquer sur "Ajouter".
	- Validation des champs obligatoires.
- [ ] 2. Je peux modifier un produit existant.
	- Bouton "Modifier" qui prérempli un nouveau formulaire avec les données du produit sélectionné.
- [ ] 3. Je peux dupliquer un produit existant pour en créer un nouveau rapidement.
	- Bouton "Dupliquer" qui prérempli un nouveau formulaire avec les données du produit sélectionné (excluant l'ID).
- [ ] 4. Je peux supprimer un produit.
	- Confirmer la suppression après avoir cliqué sur le bouton "Supprimer" avec une fenêtre modale.
- [ ] 5. Je peux consulter a liste des produits.
	- Affichage conditionnel sous forme de tableau.
- [ ] 6. Je peux rechercher un produit par son nom.
	- Champ de recherche dynamique avec mise à jour instantanée des résultats.
- [ ] 7. Je peux voir les détails d'un produit.
	- Cliquer sur un produit affiche ses détails (nom, description, prix, stock).
- [ ] 8. Je peux voir les quantités disponibles d'un produit.
	- Affichage en temps réel des quantités avec indicateur visuel (couleurs).
- [ ] 9. Je peux être averti lorsqu'un produit est en rupture de stock.
	- Notification (message / toast / snackbar) lorsqu'un produit atteint un stock critique (inférieur ou égal à 3).
- [ ] 10. Je peux exporter la liste des produits en CSV.
	- Bouton "Exporter" permettant de télécharger la liste en format CSV.

> Ajouter ici toute fonctionnalité optionnelle (ex. catégorie, actif, date de création, etc.).

---

## 3) Technologies utilisées

- Vue.js 3
- Node.js
- TypeScript

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

**TODO: Décrire la structure du projet et les responsabilités.**

### Structure des dossiers

- `src/components/` : Composants UI (responsabilité unique)
- `src/models/` : Types/interfaces TypeScript (ex. `Product`)
- `src/services/` : Logique utilitaire (ex. export CSV)
- `src/assets/` : Images (incluant le logo)
- `src/styles/` : Fichiers CSS
- `src/scripts` : Fichiers TypeScript


### Composants clés

- `App` : Composant principal pour monter l'application.
- `MainMenu` : Menu principal avec boutons pour accéder aux fonctionnalités.
- `ProductForm` : Formulaire d'ajout, d'édition et de duplication de produit.
- `ProductDisplay` : Affiche les informations liées à un produit à l'écran et offre des options pour dupliquer, éditer ou supprimer le produit lié.
- `ProductList` : Liste des produits, contient des `ProductDisplay` et une `SearchBar` pour filtrer les produits.
- `SearchBar` : Barre de recherche avec libellé, icône et événement lors de changement à la requête.
- `StockIndicator` : Indicateur de niveau d'inventaire avec code de couleur.

---

## 7) Utilisation de l’IA (OBLIGATOIRE)

> **IMPORTANT :** Toute omission d’utilisation d’IA (même pour UI / CSS) peut entraîner **0** et une mention de plagiat.

### Outil(s) utilisé(s)

- Nom des outils (ex. ChatGPT, Copilot, etc.)_

### Comment l’IA a été utilisée

Décrire concrètement :

- Brainstorming / planification
- Aide au debug
- Clarification TypeScript/Vue
- Suggestions UI/CSS
- Génération d’exemples (puis adaptation) 

### À quel endroit

#### Nom du fichier 1

- Ligne ## à ##: Décrire pourquoi
- Ligne ## à ##: Décrire pourquoi
    
#### Nom du fichier 2

- Ligne ## à ##: Décrire pourquoi
- Ligne ## à ##: Décrire pourquoi

### Exemples de prompts (2 à 5)

1. “…”
2. “…”

