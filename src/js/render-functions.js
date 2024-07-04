import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox;

export function renderImages(images){
    const gallery = document.getElementById('image-gallery')
    gallery.innerHTML = '';

    if(images.length === 0){
        iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });
       return;
    }

    images.forEach(image=> {
        const imgElement = document.createElement('a');
        imgElement.href = document.largeImageURL;
        imgElement.dataset.lightbox = 'gallery';
        imgElement.innerHTML = `<img src="${image.webformatURL}" alt="${image.tags}" data-large="${image.largeImageURL}">`;
        gallery.appendChild(imgElement);
    });

    if(lightbox){
        lightbox.refresh();
    } else{
        lightbox = new SimpleLightbox('[data-lightbox]')
    }
}

export function showError(message){
    iziToast.error({ message });
}

export function showLoader(){
    document.getElementById('loader').classList.remove('hidden')
}

export function hideLoader(){
    document.getElementById('loader').classList.add('hidden')
}