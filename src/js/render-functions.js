
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox;

export function renderImages(images) {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = '';

    if (images.length === 0) {
        iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });
        return;
    }

    const list = document.createElement('ul');
    list.classList.add('image-list');

    images.forEach(image => {
        const listItem = document.createElement('li');
        listItem.classList.add('image-item');

        const link = document.createElement('a');
        link.href = image.largeImageURL;
        link.dataset.lightbox = 'gallery';

        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
        img.dataset.large = image.largeImageURL;

        link.appendChild(img);

        const info = document.createElement('div');
        info.classList.add('image-info');
        info.innerHTML = `
            <p>Likes: ${image.likes}</p>
            <p>Views: ${image.views}</p>
            <p>Comments: ${image.comments}</p>
            <p>Downloads: ${image.downloads}</p>
        `;

        listItem.appendChild(link);
        listItem.appendChild(info);
        list.appendChild(listItem);
    });

    gallery.appendChild(list);

    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('[data-lightbox]');
    }
}

export function showError(message) {
    iziToast.error({ message });
}

export function showLoader() {
    document.getElementById('loader').classList.remove('hidden');
}

export function hideLoader() {
    document.getElementById('loader').classList.add('hidden');
}
