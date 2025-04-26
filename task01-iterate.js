/**
 * Tâche 01: Itérer avec Async/Await
 * 
 * Cette fonction prend un tableau de valeurs et enregistre chaque valeur
 * avec un délai de 1 seconde entre les enregistrements.
 * 
 * @param {Array} values - Le tableau de valeurs à itérer
 */
async function iterateWithAsyncAwait(values) {
  console.log("Début de l'itération avec async/await");
  
  for (const value of values) {
    // Création d'une promesse qui se résout après 1 seconde
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Valeur: ${value}`);
  }
  
  console.log("Fin de l'itération");
}

console.log("=== TÂCHE 01: ITÉRER AVEC ASYNC/AWAIT ===");
const testValues = [10, 20, 30, 40, 50];
console.log(`Tableau à itérer: [${testValues.join(', ')}]`);

iterateWithAsyncAwait(testValues)
  .then(() => console.log("Tâche 01 terminée avec succès"))
  .catch(error => console.error("Erreur dans la Tâche 01:", error));