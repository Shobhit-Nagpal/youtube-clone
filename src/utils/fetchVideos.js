const apiKey = process.env.REACT_APP_RAPID_API_KEY;

const fetchVideos = async (url) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${apiKey}`,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {fetchVideos};