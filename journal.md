# Journal - TP01 - Gestionnaire de produits

> **Cours :** 420-W40-SF - Développement d’applications Web (Cégep de Sainte-Foy)  
> **Travail :** TP01 - Gestionnaire de produits  
> **Étudiant(e) :** Xavier Lepage
> **Période :** 2026-02-20 → 2026-03-05

---

## Consignes
Pour **chaque séance**, écrire **8 à 10 lignes** (minimum) qui incluent :
- Ce que j’ai fait (concret, vérifiable)
- Les difficultés / erreurs rencontrées
- Comment j’ai résolu (ou tenté de résoudre)

> **IMPORTANT** : Écrire en fin de séance pendant que c’est frais.

---

## Séance 1 — _2026-02-20 (Durée : _2h30m_)
**Objectif de la séance :**  
Initialiser le projet et mettre en place la structure de base.

**Travail réalisé (8–10 lignes min)**  
- J'ai consulté les énoncés.
- J'ai pris connaissance des récits utilisateur.
- Je me suis approprié les fichiers.
- J'ai fait la création du projet.
- J'ai fait la création du dépot GitHub.
- J'ai configuré les permissions.
- J'ai mis en place la structure de mon projet.
- J'ai fait le remplissage des étapes initiales des fichiers de log.
- J'ai fait une brève planification des fonctionnalités et de l'architecture.

**Difficultés / bugs**  
- Mon dépot était initialisé avec le mauvais utilisateur et au mauvais endroit.

**Solutions / pistes testées**  
- J'ai changé l'utilisateur.
- J'ai fait l'installation du projet avant d'initialiser le dépot.

---

## Séance 2 — _2026-02-24_ (Durée : _1h40m_)
**Objectif de la séance :**  
Débuter l'implémentation de base de la structure de l'application et débuter les premiers récits.

**Travail réalisé (8–10 lignes min)**  
- J'ai fait l'installation de Bootstrap et de Popper.js dans le projet.
- J'ai créé un modèle pour représenter un produit.
- J'ai créé un modèle pour représenter une catégorie de produit.
- J'ai ajouté une liste des catégories possibles pour les produits.
- J'ai conçu un système de bouton intégrant Bootstrap.
- J'ai ajouté un système de couleurs en fonction du type d'intéraction.
- J'ai implémenté un "collapse" de Bootstrap pour le formulaire de produit.

**Difficultés / bugs**  
- J'ai eu quelques dilemmes au niveau de mes décisions d'architecture, ce qui m'a considérablement ralenti.

**Solutions / pistes testées**  
- J'ai choisi de segmenter mon interface et d'implémenter des systèmes qui je juge pourront m'être utiles par la suite.

---

## Séance 3 — _2026-02-27_ (Durée : _2h30_)
**Objectif de la séance :**  
Poursuivre l'implémentation des premiers récits utilisateur.

**Travail réalisé (8–10 lignes min)**  
- J'ai fait un refactor complet de mon système de "collapse".
- J'ai conçu la mise en page du formulaire de produit.
- J'ai ajouté de la réactivité avec les "v-model".
- J'ai ajouté des validations de base en temps réel.
- J'ai conçu une expression régulière pour la validation du prix d'un produit.
- J'ai apporté quelques corrections mineures à mon projet.
- J'ai fait état de l'avancement du projet.

**Difficultés / bugs**  
- J'ai passé énormément de temps à déboguer et à faire fonctionner le système de "collapse" qui devrait néanmoins me sauver du temps par la suite.
- La conception de la mise en page avec Bootstrap a pris plus de temps que prévu.
- Les validations en temps réel du formulaire ont été assez complexes à implémenter et sont moins précises que souhaité.

**Solutions / pistes testées**  
- Beaucoup de consultation de documentation pour comprendre comment fonctionnent les choses.
- Persévérance, réflexion et recherche pour trouver et comprendre les problèmes et les erreurs dans la console lorsqu'il y en avait.

---

## Séance 4 — _2026-03-03_ (Durée : _1h40_)
**Objectif de la séance :**  
Implémenter les fonctionnalités de duplication et de suppression de produits.

**Travail réalisé (8–10 lignes min)**  
- J'ai ajouté un bouton à mon composant ProductDisplay pour permettre la duplication de produit.
- J'ai ajouté la logique pour permettre la duplication.
- J'ai modifié mon code d'ajout de produit pour le rendre moins redondant avec les nouvelles fonctionnalités.
- J'ai fait du débogage pour trouver ce qui causait un avertissement dans la console.
- J'ai réglé l'avertissement persistant dans la console.
- J'ai fait état de l'avancement de mon projet.

**Difficultés / bugs**  
- Mon architecture pour l'ajout de produit était inoptimale et causait de la répétition.
- Il y avait un avertissement persistant dans la console à cause d'un bouton, ce qui posait problème.

**Solutions / pistes testées**  
- J'ai dû faire de petits changements au niveau de l'architecture pour réutiliser mon code davantage.
- J'ai ajouté une valeur par défaut avec un "null coalescence operator" dans mon bouton personnalisé pour rendre un paramètre optionnel, réglant l'avertissement.

---

## Séance 5 — _2026-03-06_ (Durée : _2h30_)
**Objectif de la séance :**  
Implémenter un style minimaliste pour ProductDisplay et un indicateur visuel des quantités.

**Travail réalisé (8–10 lignes min)**  
- J'ai fait en sorte que le formulaire de produit soit mis en évidence lorsqu'on l'ouvre pour plus de clarté.
- J'ai ajouté un accordéon Bootstrap pour avoir un affichage plus minimaliste.
- J'ai fait le choix de permettre à plusieurs produits d'afficher leurs détails en même temps pour permettre la comparaison.
- J'ai fait du débogage au niveay du style de l'accordéon à partir de l'inspecteur du navigateur.
- J'ai consulté beaucoup de documentation Bootstrap sur les options de style.
- J'ai modifié des styles de bases de l'accordéon avec des classes Bootstrap.
- J'ai ajouté des styles personnalisés à l'accordéon pour suivre le thème visuel de l'application.
- J'ai ajouté un indicateur visuel coloré pour le niveau d'inventaire des produits.
- J'ai réglé un bogue avec la mise en évidence du formulaire qui ne se produisait pas avec la duplication et l'édition.

**Difficultés / bugs**  
- Les styles de base de l'accordéon Bootstrap étaient problématiques. Lorsque j'appliquais une bordure arrondie et colorée, elle était entrecoupée aux alentours des coins. 
- Il y avait une ombre indésirée en dessous du titre de l'accordéon.
- Mon indicateur visuel causait un mauvais alignement vertical du texte.
- Ma fonctionnalité de mise en évidence ne prenait pas en compte la duplication et l'édition.

**Solutions / pistes testées**  
- J'ai fait du débogage à partir de l'inspecteur du navigateur pour trouver les coupables.
- J'ai consultée la documentation de Bootstrap pour trouver comment couper ce qui dépassait de ma div et enlever l'ombre.
- J'ai utilisé un `flex` afin d'aligner verticalement le texte.
- J'ai fait en sorte que les actions de duplication et d'édition causent également la mise en évidence du formulaire.

---

## Résumé global (à compléter avant remise)
- **Ce dont je suis le plus fier/fière :** Je suis particulièrement fier de ma liste de produits au niveau de sa structure, son aspect visuel et la convivialité de la fonction de recherche. Il en va de même pour l'alerte modale lors d'une suppression de produit. Je suis aussi fier de mon effort concernant la planification.
- **Ce que j’améliorerais avec plus de temps :** 
	- La validation du formulaire ne fonctionne pas exactement comme je l'aurais espéré. J'aurais aimé la rendre un peu plus dynamique et régler ses quelques bogues. 
	- De manière similaire, j'aurais pu peaufiner le système d'ouverture et de fermeture des différents panneaux ou implémenter du défilement automatique pour les mettre en évidence.
	- J'aurais aimé mettre en place une notification lors du téléchargement de `CSV` pour donner plus de rétroaction à l'utilisateur.
	- J'aurais pris le temps d'isoler davantage ma logique applicatif dans plusieurs fichiers de scripts.
	- Pour réutiliser davantage mon code, j'aurais fait un composant spécifique pour l'alerte modale.
	- J'aurais ajouté un `prop` optionnel à mon composant de bouton afin d'inclure une icône.
	- Je crois qu'il aurait été pertinent de d'implémenter l'importation de fichier `CSV` afin d'avoir un système de sauvegarde un peu plus fonctionnel ainsi que pour permettre le partage. Une autre alternative serait le `JSON`.
	- Finalement, j'aurais ajouté plus de catégories de composants pour plus de diversité.
- **3 apprentissages techniques :**  
  1)	J'ai pratiqué mon sens de la planification et de la structure de projet en devant être prévoyant pour faciliter le développement.
  2) 	J'ai nettement améliorer ma maîtrise de Bootstrap en l'utilisant pour la grande majorité de la mise en page (à quelques exceptions près qui demandaient un contrôle plus fin).
  3)	J'ai appris à télécharger un fichier à partir du script.

---