# Backlog - TP01 - Gestionnaire de produits

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** Xavier Lepage
> **Dernière mise à jour :** 2026-02-20


---

## 1) Règles de backlog (à respecter)

- **Tâches petites** : Idéalement 25 à 50 minutes.
- **Titres explicites** : “UI liste produits (tableau)” au lieu de “liste”.
- **Critères d’acceptation** : 1 à 3 points simples pour savoir si c’est “done”.
- **Ordre logique** : Setup → Affichage → Interactions → Validations → Export → Déploiement → Finitions.
- **Suivi** : On bouge les statuts au fur et à mesure (visible).
- **Légende statut :** ⬜ À faire | 🟦 En cours | ✅ Fait | 🟥 Bloqué
- Priorités
	- **MUST** : Requis par l’énoncé (récits 1 à 10 + méthodologie)
	- **SHOULD** : Qualité/robustesse (cas limites, petits refactors)
	- **COULD** : Bonus / nice-to-have (si tout le reste est stable)

---

## 2) Tableau du backlog

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d’acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
| A1 |   MUST   | ✅ |  Créer les modèles associés à un Produit  | #1 |  Types clairs et liste finie de catégories  |  Réflexion sur les types nécessaires  |
| A2 |   MUST   | ✅ |  Créer la structure de la page d'accueil  | #1 |  Interface modulaire et conçue pour respecter l'OCP  |  Difficultés avec Bootstrap et l'architecture  |
| A3 |   MUST   | ✅ |  Créer les composants pricipaux du formulaire d'ajout de produit   | #1 |   Hiérarchie de composants et formulaire structuré   |  Difficultés au niveau des validations en temps réel  |
| B1 |   MUST   | ✅ |  Créer la la liste de produit et ses composants d'affichage   | #5 |   Une liste claire permet de visualiser l'ensemble des produits ajoutés   |  Le temps passé à concevoir l'architecture a grandement facilité cette étape.  |
| B2 |   MUST   | ✅ |  Ajouter un bouton d'édition aux produits de la liste  | #2 |   Le bouton déclenche l'ouverture du formulaire et son remplissage.  |  Le côté "responsive" du formulaire ne fonctionnait pas correctement.  |
| B3 |   MUST   | ✅ |  Ajouter un bouton de duplication aux produits de la liste  | #3 |  Le bouton déclenche l'ouverture du formulaire et son remplissage.  |  Avertissement dans la console réglé.  |
| B4 |   MUST   | ✅ |  Ajouter un bouton de suppression aux produits de la liste  | #4 |   Le bouton déclenche une fenêtre modale afin de confirmer l'action.   |  Utilisation d'un modal Bootstrap pour confirmer l'action.  |
| B5 |   MUST   | ✅ |  Ajouter un champ de recherche  | #6 |  Le champ de recherche est situé dans la liste des produits.  |  J'utilise un "input group" de Bootstrap pour donner un petit style à ma barre de recherche.  |
| B6 |   MUST   | ✅ |  Permettre le filtre en temps réel grâce à la recherche  | #6 |  Seuls les produits dont le nom contient le contenu de la recherche sont affichés.  |  Je fais un tri en temps réel des produits à afficher dans la liste avec un `computed` et la méthode `filter` de JavaScript.  |
| C1 |   MUST   | ✅ |  Affichage par défaut plus minimaliste au niveau de `ProductDisplay`  | #7 |  `ProductDisplay` est plus épuré et peut être agrandi pour voir les détails d'un produit.  |  Incorporation du menu accordéon Bootstrap difficile en raison des styles de base que j'ai dû enlever. |
| D1 |   MUST   | ✅ |  Ajouter un indicateur d'inventaire coloré à `ProductDisplay`  | #8 |  Indicateur de stock avec code de couleur présent dans `ProductDisplay`.  |  Certains problèmes avec l'alignement vertical du texte qui ont été résolus avec un `flex`. Mes choix architecturaux ont toutefois été payants pour l'affectation du code de couleur.  |
| D2 |   MUST   | ✅ |  Notification lorsqu'un produit atteint un niveau d'inventaire bas  | #9 |  Alerte affichée lorsqu'un produit a une quantité critique en inventaire.  |  J'ai eu des problèmes avec l'alerte de Bootstrap, donc j'ai décidé de me simplifier la vie avec une approche booléenne.  |
| E1 |   MUST   | ✅ |  Créer un générateur de CSV pour les produits  | #10 |  Le générateur produit une chaîne de caractères qui représente les produits.  |  Le générateur est une fonction qui retourne une chaîne de caractères formattée comme du CSV.  |
| E2 |   MUST   | ⬜ |  Télécharger un fichier à partir du générateur  | #10 |  Un bouton permet de télécharger un fichier construit à partir du générateur.  |    |
| F1 |   SHOULD   | ⬜ |  Problèmes au niveau de la validation du formulaire de produit  | #1 |   Validation en temps réel réinitialisée après ajout et le prix affiche correctement les erreurs.   |                   |
| F2 |   COULD   | ⬜ |  Bonifier les validations du formulaire   | #1 |   Rendre encore plus "responsive" les validations du formulaire   |                   |
|     |          |        |               |               |                                             |                   |