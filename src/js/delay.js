// Función para crear un retraso con async/await
function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}
// Función asincrónica que utiliza el retraso
async function espera() {
  // Esperar 2 segundos (2000 milisegundos)
  await delay(3500);
}
export { espera };