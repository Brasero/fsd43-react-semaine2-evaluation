## Projet : ToDo-list

### Description du projet
Pour ce projet, il faudra créer une Todo-List où l'utilisateur pourra ajouter des tâches qu'il doit
effectuer, les modifier, les supprimer. Il devra pouvoir les valider, et les tâches terminées devront présenter un aspect 
visuel différent des tâches non terminées.

### Fonctionnalités principales
1. Ajout d'une tâche avec un titre, une description (qui peut être optionnelle), un indicateur de priorité parmis les suivants (classique, important, urgent, trés urgent) et un id auto-généré 
2. Modification des tâches (sur une page différente)
3. Suppréssion des tâches
4. Validation d'une tâche
5. filtrage des taches par priorité et état (en cours, terminée)
6. Validation des données avant enregistrement (on s'assurera que chaque tâche aura au moins un titre et que ce dérnier n'est pas vide)

### Exigences techniques
- Utiliser React.js comme framework de développement
- Utiliser au choix `redux` ou `@reduxjs/toolkit` pour gérer l'état global de votre application
- Utiliser CSS ou un framework de votre choix pour le style et la mise en page de l'application.
- Utiliser `react-router-dom` pour le routage de votre application

### Points de notation
- Gestion des tâches `(5 points)` : La gestion des tâches doit présenter toutes les fonctionnalités demandées sans effet inattendu
- Mise en place d'un état global avec `redux` ou `@reduxjs/toolkit` `(5 points)` : Les reducers sont bien écrit, chaque possibilité de la bibliothèque est utilisée à bon escient.
- Mise en place d'un système de route avec `react-router-dom` `(5 points)` : Le router est mis en place correctement, au moins une route dynamique est utilisé.
- UI / UX `(3 points)` : L'aspect général et l'interface utilisateur de l'application sont à prendre en compte.

### Note finale
La note finale sur 20 sera calculé en fonction du nombre total de points obtenu sur un total de 18 points possibles.

## Bonne chance et amusez-vous bien