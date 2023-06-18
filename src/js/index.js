import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import { notiError } from './notifications.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
let catIparagraph1 = document.createElement('p');
let catIparagraph2 = document.createElement('p');
let catIparagraph3 = document.createElement('p');
let catIparagraph4 = document.createElement('img');


const loaderP = document.querySelector('.loader');
const errorP = document.querySelector('.error');

const spanElement = document.createElement('span');

spanElement.className = 'loadericon';
loaderP.appendChild(spanElement);

let breedId;

errorP.style.display = 'none';
loaderP.style.display = 'block';

espera1();

select.addEventListener('change', function (event) {  

  const selectedBreed = event.target.value;
  
  breedId = selectedBreed;
  
  errorP.style.display = 'none';
  loaderP.style.display = 'block';

  fetchCatByBreed(breedId)
    .then(data => {

      loaderP.style.display = 'none';

      catIparagraph1.textContent = `Breed name: ${data[0].breeds[0].name}`;
      catInfo.appendChild(catIparagraph1);

      catIparagraph2.textContent = `Description: ${data[0].breeds[0].description}`;
      catInfo.appendChild(catIparagraph2);

      catIparagraph3.textContent = `Temperament: ${data[0].breeds[0].temperament}`;
      catInfo.appendChild(catIparagraph3);
      
      catIparagraph4.src = data[0].url;
      catIparagraph4.alt = `Cat Image. Breed: ${data[0].breeds[0].name}`
      catIparagraph4.width = "300";
      catInfo.appendChild(catIparagraph4);
            
    })
    .catch(error => {
      // Handling errors appropriately
      notiError();
      loaderP.style.display = 'none';
      //errorP.style.display = 'block';
    });
});

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function espera1 () {
  
  await delay(3200);

  fetchBreeds()
  .then(breeds => {
    
    breeds.map(function(elemento) {
      const option = document.createElement('option');
      
      option.textContent = elemento.name;
      option.value = elemento.id;

      select.appendChild(option);

     
    });

    new SlimSelect({ select: select });
   
    loaderP.style.display = 'none';
    
  })
  .catch(error => {
    // Handling errors appropriately

    espera();
    loaderP.style.display = 'none';

    errorP.style.display = 'block';
  });

}