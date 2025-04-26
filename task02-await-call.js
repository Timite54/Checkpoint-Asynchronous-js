/**
 * Tâche 02: Attendre un appel
 * 
 * Cette fonction simule l'obtention de données à partir d'une API.
 * Elle utilise await pour attendre la réponse de l'API, puis enregistre les données.
 * 
 * @returns Les données obtenues de l'API simulée
 */
async function awaitCall() {
    console.log("Début de l'appel API");
    // Simulation d'un appel API qui renvoie une promesse
    const fetchDataFromAPI = () => {
      return new Promise((resolve) => {
        console.log("API: Traitement de la demande...");
        
        // Simulation d'un délai réseau de 2 secondes
        setTimeout(() => {
          const data = {
            id: Math.floor(Math.random() * 1000),
            name: "Produit exemple",
            description: "Ceci est un produit obtenu depuis l'API",
            price: Math.floor(Math.random() * 100) + 10,
            timestamp: new Date().toISOString()
          };
          
          console.log("API: Données prêtes à être envoyées");
          resolve(data);
        }, 2000);
      });
    };
    
    console.log("En attente des données de l'API...");
    
    const data = await fetchDataFromAPI();
    
    console.log("Données reçues de l'API:");
    console.log(JSON.stringify(data, null, 2));
    
    return data;
  }
  
  console.log("=== TÂCHE 02: ATTENDRE UN APPEL ===");
  
  awaitCall()
    .then(result => console.log("Tâche 02 terminée avec succès"))
    .catch(error => console.error("Erreur dans la Tâche 02:", error));