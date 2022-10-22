import { TOKEN_WEATER } from "../constants/constants";


const getCurrentWeather = async (lat,lon) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${TOKEN_WEATER}`;

  const response = await fetch(url)
  .then(r => r.json())
  
  return response.main.temp
}

export const getWeaterCoordinat = async (location) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${TOKEN_WEATER}`;

  const response = await fetch(url)
  .then(r => r.json())
  .then(r => r[0]);

  if (response) {
    if ("lat" in response && "lon" in response &&response?.country === "RU"){
      return await getCurrentWeather(response.lat,response.lon);
    }
  }
}; 
