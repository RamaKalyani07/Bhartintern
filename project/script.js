const apiKey ="09b68ac40c57319ad0cbe6fc89d25197";
const city="Hyderabad";

async function fetchWeatherData(){
   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid={API key}');

   const data = await response.json();
   console.log(data);
   console.log(data.main.temp);
   console.log(data.name);
   console.log(data.wind.speed);
   console.log(data.main.humidity);
   console.log.(data.visiility);
   updateWeatherUI(data);
}

const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const windSpeed = document.querySelector(".wind-speed");
const humidity= document.querySelector(".humidity");
const visibility= document.querySelector(".visibility-distance");

const descriptionText = document.querySelector('.description-text');
const date = document.querySelector(".date");


fetchWeatherData();

function updateWeatherUI(data) {
cityElement.textContent = data.name;
temperature.textContent = '${Math.round(data.main.temp)}';
windSpeed.textContent = '${data.wind.speed} km/h' ;
humidity.textContent = '$data.main.humidity}%';
visibility.textContent = data.visibility/1000;
descriptionText.textContent = data.weather[0].description;

const currentDate = new Date();
date.textContent = currentDate.toDateString();
}

