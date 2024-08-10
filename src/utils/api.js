const API_URL = 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100';

export const fetchTopStories = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch top stories');
  }
  const data = await response.json();
  return data.hits;
};