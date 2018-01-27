import axios from 'axios';

const API_KEY = 'ae3a19314faff037301b728e3e89ba74';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * @param  {String} city the city to be search
 * @returns {Object} Redux object
 */
export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        payload: request,
        type: FETCH_WEATHER
    };
}