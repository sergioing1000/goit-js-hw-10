
fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manejar los datos de la respuesta
    console.log(data);
  })
  .catch(error => {
    // Aquí puedes manejar errores en la solicitud
    console.error('Error:', error);
  });
