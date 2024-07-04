const API_KEY = '44764686-39d1ce2fa505d935edd12a03d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=20`);
    const data = await response.json();
    return data.hits;}