const API_KEY = 'xOccoR4bOI9lkkLTIexrmhYN8XTqoOBq'
    export const getGifs = async(category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${ category }&limit=10`
        const answer = await fetch( url );
        const { data = [] } = await answer.json();

        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

        return gifs
    }
