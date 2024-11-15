
import axios from 'axios';

const API_KEY = '527d4e9cf9ca48e3a1e140754241311'; 
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}`);
    return response.data; 
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};