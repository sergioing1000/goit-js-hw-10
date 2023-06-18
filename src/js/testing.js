

document.addEventListener('DOMContentLoaded', function () {
  var select = document.querySelector('#mySelect');
  new SlimSelect({ select: select });
});

console.log("primer paso");

esperar();


function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function esperar() {
  
  await delay(3200);
  
  console.log("Línea después de la pausa");
}

esperar();
