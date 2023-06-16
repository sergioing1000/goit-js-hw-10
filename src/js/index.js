import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import { espera } from './delay.js';


const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
let catIparagraph1 = document.createElement('p');
let catIparagraph2 = document.createElement('p');
let catIparagraph3 = document.createElement('p');

const loaderP = document.querySelector('.loader');
const errorP = document.querySelector('.error');

let breedId;

errorP.style.display = 'none';
loaderP.style.display = 'block';

fetchBreeds()
  .then(breeds => {

    breeds.map(function(elemento) {
      const option = document.createElement('option');
      
      option.textContent = elemento.name;
      option.value = elemento.id;

      select.appendChild(option);

      console.log(option);
     
    });

    espera();
    loaderP.style.display = 'none';
    
  })
  .catch(error => {
    // Handling errors appropriately

    espera();
    loaderP.style.display = 'none';

    errorP.style.display = 'block';
  });


document.addEventListener('DOMContentLoaded', function() {
  let selection = document.querySelector('.breed-select');
  new SlimSelect({ selection: selection });
});


select.addEventListener('change', function (event) {
  
  
  const selectedBreed = event.target.value;
  console.log('Selected breed:', selectedBreed);
  breedId = selectedBreed;
  console.log('Selected breed:', breedId);

  
  loaderP.style.display = 'block';

  fetchCatByBreed(breedId)
    .then(data => {
      console.log(data);

      espera();
      loaderP.style.display = 'none';

      catIparagraph1.textContent = `Breed name: ${data[0].breeds[0].name}`;
      catInfo.appendChild(catIparagraph1);

      catIparagraph2.textContent = `Description: ${data[0].breeds[0].description}`;
      catInfo.appendChild(catIparagraph2);

      catIparagraph3.textContent = `Temperament: ${data[0].breeds[0].temperament}`;
      catInfo.appendChild(catIparagraph3);
      
    })
    .catch(error => {
      // Handling errors appropriately
      loaderP.style.display = 'none';
      errorP.style.display = 'block';
    });
});