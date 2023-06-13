import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

let breedId;

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
let catIparagraph1 = document.createElement('p');
let catIparagraph2 = document.createElement('p');
let catIparagraph3 = document.createElement('p');

fetchBreeds()
  .then(breeds => {
    breeds.map(function(elemento) {
      const option = document.createElement('option');
      
      option.textContent = elemento.name;
      option.value = elemento.id;

      select.appendChild(option);
    });
  })
  .catch(error => {
    // Handling errors appropriately
  });


  select.addEventListener('change', function(event) {
    const selectedBreed = event.target.value;
    console.log('Selected breed:', selectedBreed);
    breedId = selectedBreed;
    console.log('Selected breed:', breedId);

    fetchCatByBreed(breedId)
      .then(data => {
        console.log(data);

        catIparagraph1.textContent = `Breed name: ${data[0].breeds[0].name}`;
        catInfo.appendChild(catIparagraph1);

        catIparagraph2.textContent = `Description: ${data[0].breeds[0].description}`;
        catInfo.appendChild(catIparagraph2);

        catIparagraph3.textContent = `Temperament: ${data[0].breeds[0].temperament}`;
        catInfo.appendChild(catIparagraph3);
        
      })
      .catch(error => {
        // Handling errors appropriately
      });
  });