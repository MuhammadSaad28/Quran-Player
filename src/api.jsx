import axios from 'axios';

// Function to fetch reciters
export const fetchReciters = async () => {
  try {
    const response = await axios.get('https://mp3quran.net/api/_english.php');
    return response.data.reciters;
  } catch (error) {
    console.error('Error fetching reciters:', error);
    return [];
  }
};

// Function to fetch chapters
export const fetchChapters = async () => {
  try {
    const response = await axios.get('https://api.quran.com/api/v4/chapters');
    return response.data.chapters;
  } catch (error) {
    console.error('Error fetching chapters:', error);
    return [];
  }
};

// Function to fetch Quran data
export const fetchQuranData = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/risan/quran-json/main/dist/quran.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching Quran data:', error);
    return [];
  }
};