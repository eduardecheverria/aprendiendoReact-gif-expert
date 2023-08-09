const apiKey = 'bm86GEhDhlL0VQT5LE0yXlOrMbiDpRQO';
const randomEndpoint = 'https://api.giphy.com/v1/gifs/random';

const peticion = fetch(`${randomEndpoint}?api_key=${apiKey}`);

peticion
    .then((resp) => resp.json())
    .then(({ data }) => {
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
