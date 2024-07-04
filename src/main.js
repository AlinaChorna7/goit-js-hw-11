
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError, showLoader, hideLoader } from './js/render-functions.js';

document.getElementById('search-form').addEventListener('submit', async event => {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();

    if (!query) {
        showError('Please enter a search term.');
        return;
    }

    showLoader();

    try {
        const images = await fetchImages(query);
        renderImages(images);
    } catch (error) {
        showError('An error occurred while fetching images.');
        console.error(error);
    } finally {
        hideLoader();
    }
});
