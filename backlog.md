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
| A3 |   MUST   | ✅ |  Créer les composants pricipaux du formulaire d'ajout de produit   | #1 |   Hiérarchie de composants et formulaire structuré   |                   |
| A4 |   MUST   | ✅ |  Créer la la liste de produit et ses composants d'affichage   | #5 |   Une liste claire permet de visualiser l'ensemble des produits ajoutés   |                   |
| B1 |   COULD   | ⬜ |  Bonifier les validations du formulaire   | #1 |   Rendre encore plus "responsive" les validations du formulaire   |                   |
| B2 |   MUST   | ⬜ |  Ajouter un bouton d'édition aux produits de la liste  | #2 |   Le bouton déclenche l'ouverture du formulaire et son remplissage.  |                   |
| B3 |   MUST   | ⬜ |  Ajouter un bouton de duplication aux produits de la liste  | #3 |  Le bouton déclenche l'ouverture du formulaire et son remplissage.  |                   |
| B4 |   MUST   | ⬜ |  Ajouter un bouton de suppression aux produits de la liste  | #4 |   Le bouton déclenche une fenêtre modale afin de confirmer l'action   |                   |
|     |          |        |               |               |                                             |                   |