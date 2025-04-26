/**
 * Tâche 04: Attente de requêtes simultanées
 * 
 * Cette fonction effectue deux appels API simultanément en utilisant Promise.all().
 * Elle enregistre les résultats combinés une fois les deux requêtes résolues.
 * 
 * @returns  Les résultats combinés des deux requêtes
 */
async function concurrentRequests() {
  console.log("Début des requêtes simultanées");
  
  // Simulation du premier appel API: récupération des utilisateurs
  const fetchUsers = async () => {
    console.log("API Utilisateurs: Démarrage de la requête");
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("API Utilisateurs: Données prêtes");
    return [
      { id: 1, name: "Alice", email: "alice@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
      { id: 3, name: "Charlie", email: "charlie@example.com" }
    ];
  };
  
  // Simulation du second appel API: récupération des produits
  const fetchProducts = async () => {
    console.log("API Produits: Démarrage de la requête");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("API Produits: Données prêtes");
    return [
      { id: 101, name: "Ordinateur portable", price: 999 },
      { id: 102, name: "Smartphone", price: 699 },
      { id: 103, name: "Tablette", price: 349 }
    ];
  };
  
  console.log("Lancement des deux requêtes en parallèle...");
  console.time("Temps d'exécution total");
  
  try {
    const [users, products] = await Promise.all([
      fetchUsers(),
      fetchProducts()
    ]);
    
    console.timeEnd("Temps d'exécution total");
    
    console.log("\nRésultats des requêtes:");
    console.log("Utilisateurs récupérés:", users.length);
    console.log("Produits récupérés:", products.length);
    
    // Combinaison des résultats dans un seul objet
    const combinedResults = {
      users,
      products,
      metadata: {
        userCount: users.length,
        productCount: products.length,
        timestamp: new Date().toISOString()
      }
    };
    
    console.log("\nRésultats combinés:");
    console.log(JSON.stringify(combinedResults, null, 2));
    
    console.log("\nAvantage de Promise.all():");
    console.log("- Temps total: ~2 secondes (durée de la requête la plus longue)");
    console.log("- Sans Promise.all(), cela aurait pris ~3.5 secondes (2s + 1.5s)");
    
    return combinedResults;
  } catch (error) {
    console.timeEnd("Temps d'exécution total");
    console.error("Erreur lors de l'exécution des requêtes parallèles:", error.message);
    throw error; 
  }
}

console.log("=== TÂCHE 04: ATTENTE DE REQUÊTES SIMULTANÉES ===");

concurrentRequests()
  .then(() => console.log("\nTâche 04 terminée avec succès"))
  .catch(error => console.error("Erreur dans la Tâche 04:", error));