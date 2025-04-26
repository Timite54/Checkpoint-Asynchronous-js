/**
 * Tâche 03: Gérer les erreurs avec Async/Await
 * 
 * Cette fonction simule un appel API qui peut échouer et gère les erreurs
 * de manière élégante avec try/catch.
 * 
 * @param {boolean}  - Si true, l'appel API échouera
 * @returns  Les données ou null en cas d'erreur
 */
async function awaitCallWithErrorHandling(shouldFail = false) {
  console.log(`Début de l'appel API ${shouldFail ? '(qui va échouer)' : '(qui va réussir)'}`);
  
  try {
    const fetchDataWithPossibleError = () => {
      return new Promise((resolve, reject) => {
        console.log("API: Traitement de la demande...");
        
        // Simulation d'un délai réseau
        setTimeout(() => {
          if (shouldFail) {
            console.log("API: Erreur pendant le traitement");
            reject(new Error("Erreur 500: Serveur indisponible"));
          } else {
            const data = {
              id: Math.floor(Math.random() * 1000),
              name: "Données avec gestion d'erreur",
              status: "success",
              timestamp: new Date().toISOString()
            };
            
            console.log("API: Données prêtes à être envoyées");
            resolve(data);
          }
        }, 1500);
      });
    };
    
    console.log("En attente des données de l'API...");
    
    // Utilisation de await pour attendre la résolution de la promesse
    const data = await fetchDataWithPossibleError();
    
    console.log("Données reçues avec succès:");
    console.log(JSON.stringify(data, null, 2));
    
    return data;
  } catch (error) {
    console.log("❌ Une erreur s'est produite lors de l'appel API");
    console.log(`⚠️ Message d'erreur convivial: Impossible de récupérer les données. ${error.message}`);
    console.log("Conseil: Veuillez réessayer plus tard ou contacter le support technique.");
    
    return null;
  } finally {
    // Ce bloc s'exécute toujours, que l'appel réussisse ou échoue
    console.log("Opération terminée (succès ou échec)");
  }
}

/**
 * Chaîner Async/Await
 * 
 * Cette fonction appelle trois fonctions asynchrones distinctes de manière séquentielle.
 * Chaque fonction enregistre un message après un délai d'une seconde.
 * 
 * @returns Le résultat final du chaînage
 */
async function chainedAsyncFunctions() {
  console.log("Début du chaînage de fonctions asynchrones");
  
  const firstAsyncFunction = async () => {
    console.log("Première fonction: Démarrage");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Première fonction: Terminée après 1 seconde");
    return "Données de la première fonction";
  };
  
  const secondAsyncFunction = async (dataFromFirst) => {
    console.log(`Deuxième fonction: Démarrage avec "${dataFromFirst}"`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Deuxième fonction: Terminée après 1 seconde");
    return `${dataFromFirst} → enrichies par la deuxième fonction`;
  };
  
  const thirdAsyncFunction = async (dataFromSecond) => {
    console.log(`Troisième fonction: Démarrage avec "${dataFromSecond}"`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Troisième fonction: Terminée après 1 seconde");
    return `${dataFromSecond} → finalisées par la troisième fonction`;
  };
  
  console.log("Début de l'exécution séquentielle");
  
  const resultFromFirst = await firstAsyncFunction();
  console.log(`Résultat intermédiaire 1: "${resultFromFirst}"`);
  
  const resultFromSecond = await secondAsyncFunction(resultFromFirst);
  console.log(`Résultat intermédiaire 2: "${resultFromSecond}"`);
  
  const finalResult = await thirdAsyncFunction(resultFromSecond);
  console.log(`Résultat final: "${finalResult}"`);
  
  return finalResult;
}

console.log("=== TÂCHE 03: GÉRER LES ERREURS ET CHAÎNER ASYNC/AWAIT ===");

console.log("\n--- Partie 1: Gestion des erreurs ---");
console.log("Test avec un appel qui réussit:");
await awaitCallWithErrorHandling(false);

console.log("\nTest avec un appel qui échoue:");
await awaitCallWithErrorHandling(true);

console.log("\n--- Partie 2: Chaînage de fonctions asynchrones ---");
await chainedAsyncFunctions();

console.log("\nTâche 03 terminée");