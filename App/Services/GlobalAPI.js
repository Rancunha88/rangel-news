// Define the base URL and API key
const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = API_KEY;

// GET https://newsapi.org/v2/top-headlines?country=us&apiKey=93a21c6a46734767b487220ec4f0e8a7

// Define the async function to fetch top headlines
const getTopHeadlines = async () => {

	try {
		// Construct URL with query parameters
		const url = new URL('top-headlines', BASE_URL);
		url.searchParams.append('country', 'us');
		url.searchParams.append('apiKey', API_KEY);

		const response = await fetch(url.toString());

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching top headlines:', error);
		throw error;
	}
};

// GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=93a21c6a46734767b487220ec4f0e8a7

// Define the async function to fetch top headlines
const getByCategory = async (category) => {

	try {
		// Construct URL with query parameters
		const url = new URL('everything', BASE_URL);
		url.searchParams.append('q', category);
		url.searchParams.append('apiKey', API_KEY);

		const response = await fetch(url.toString());

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching top headlines:', error);
		throw error;
	}
};

export default {
	getTopHeadlines,
	getByCategory,
};
