
function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching cat breeds:', error);
      throw error;
    });
}
///////////////////////////////////////////////////////////////////

function fetchCatByBreed(bId) {
  url = "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=" + bId + "&api_key=live_mVq2zTruppUyrfZ8JMesPxWS95e2tUJNkjfU8aecOjMITbSZgYOyUifuJ0sK0gcZ";
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching cat breeds:', error);
      throw error;
    });
}

// Export functions
export { fetchBreeds };
export { fetchCatByBreed };