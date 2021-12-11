const appLocation = document.querySelector('#location');
const iconWeather = document.querySelector('#image');
const weatherTemperature = document.querySelector('#temperature');
const weatherFeelsLike = document.querySelector('#feels-like');
const weatherCondition = document.querySelector('#weather-main');
const weatherWindPower = document.querySelector('#wind-power');
const weatherWindDirection = document.querySelector('#wind-direction');
const weatherHumidity = document.querySelector('#humidity-data');
const weatherPressure = document.querySelector('#press-data');

async function getData(position) {
  try {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_key}&units=metric&lang=en`;
    const resp = await fetch(currentUrl);
    const respData = await resp.json();
    console.log(respData);

    appLocation.innerHTML = `${respData.name} ${respData.sys.country}`;
    const appIcon = document.createElement('img');
    appIcon.src = `https://openweathermap.org/img/wn/${respData.weather[0].icon}@2x.png`;
    iconWeather.appendChild(appIcon);

    weatherTemperature.innerHTML = `${respData.main.temp.toFixed()}°C`;
    weatherFeelsLike.innerHTML = `${respData.main.feels_like.toFixed()}°C`;
    weatherCondition.innerHTML = respData.weather[0].main;
    weatherWindPower.innerHTML = `${respData.wind.speed.toFixed()} m/s`;
    weatherHumidity.innerHTML = `${respData.main.humidity} %`;
    weatherPressure.innerHTML = `${respData.main.pressure * 0.75} mmHg`;
    windDirection(respData.wind.deg);
  } catch (err) {
    console.error(err.message);
  }
}

function error(err) {
  console.error('ERROR!', err.code, err.message);
}

function windDirection(direction) {
  // weatherWindDirection = '';
  if (direction >= 0 && direction <= 22) {
    weatherWindDirection.textContent = 'north';
  } else if (direction >= 23 && direction <= 67) {
    weatherWindDirection.textContent = 'north-east';
  } else if (direction >= 68 && direction <= 112) {
    weatherWindDirection.textContent = 'east';
  } else if (direction >= 113 && direction <= 147) {
    weatherWindDirection.textContent = 'south-east';
  } else if (direction >= 148 && direction <= 202) {
    weatherWindDirection.textContent = 'south';
  } else if (direction >= 203 && direction <= 247) {
    weatherWindDirection.textContent = 'south-west';
  } else if (direction >= 248 && direction <= 292) {
    weatherWindDirection.textContent = 'west';
  } else if (direction >= 293 && direction <= 336) {
    weatherWindDirection.textContent = 'north-west';
  } else if (direction >= 293 && direction <= 360) {
    weatherWindDirection.textContent = 'north';
  }
}

const navOptions = {
  enableHighAccuracy: true,
  timeout: 1000,
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getData, error, navOptions);
}

window.addEventListener('DOMContentLoaded', function () {
  getData();
});
