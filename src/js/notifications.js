import Notiflix from 'notiflix';

function notiError() {

  Notiflix.Notify.init({
    width: '500px',
    position: 'center',
    closeButton: true,
  });

  Notiflix.Notify.failure('ERROR LOADING');
}

// Export functions
export { notiError };