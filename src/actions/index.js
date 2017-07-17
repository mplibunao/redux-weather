import axios from 'axios';

const API_KEY = '9a89d707dff3eebda31725412daa9ce5';
//api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7
// Add var country and cnt
const UNIT = 'units=metric';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&${UNIT}`;
//http://api.openweathermap.org/data/2.5/forecast/daily?appid=9a89d707dff3eebda31725412daa9ce5&q=London
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}