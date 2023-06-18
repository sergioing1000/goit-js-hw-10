function delay(duration) {
  return new Promise(resolve => {   
    console.log("linea1");
    console.log("linea2");
    console.log("linea3");
    console.log(duration);
    console.log(typeof duration);
    setTimeout(resolve, duration);
  });
}


// Función asincrónica que utiliza el retraso
async function espera() {

  console.log("entra a la función espera");
  await delay(3500);
}

export { espera };
