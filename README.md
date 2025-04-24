# Checkpoint-Asynchronous

## Votre Objectif
Dans ce point de contrôle, nous verrons les sujets suivants : itérer avec async/await, attendre un appel, gérer les erreurs avec async/await, enchaîner async/await, attendre des requêtes concurrentes et attendre des appels parallèles:
Choisissez au moins 3 tâches à résoudre.


## Instructions
 Tâche 01:

      Itérer avec Async/Await: Ecrire une fonction async iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les enregistrements.

 Tâche 02:
   
    Attendre un appel: Créer une fonction asynchrone awaitCall qui simule l'obtention de données à partir d'une API. Utilisez await pour attendre la réponse de l'API, puis enregistrez les données.

Tâche 03:
    
    Gérer les erreurs avec Async/Await:Modifiez la fonction awaitCall pour gérer les erreurs de manière élégante. Si l'appel à l'API échoue, attrapez l'erreur et enregistrez un message d'erreur convivial.    
    Chaîner Async/Await: Écrivez une fonction chainedAsyncFunctions qui appelle trois fonctions asynchrones distinctes de manière séquentielle. Chaque fonction doit enregistrer un message après un délai d'une seconde. Enchaînez ces fonctions en utilisant await.

Tâche 04:

    Attente de requêtes simultanées: Créez une fonction asynchrone concurrentRequests qui effectue deux appels API simultanément en utilisant Promise.all(). Enregistrez les résultats combinés une fois les deux requêtes résolues.

Tâche 05:

    Attente des appels parallèles:Écrivez une fonction parallelCalls qui prend un tableau d'URL et récupère les données de chaque URL simultanément en utilisant Promise.all(). 
    Enregistrez les réponses une fois que toutes les requêtes sont terminées.
