const app = document.querySelector('#app');
app.classList =
  'container mx-auto px-2 py-16 max-w-sm h-full min-h-screen border-2 border-solid border-gray-300 rounded-md bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500';

const appContainer = document.querySelector('#app-container');
appContainer.classList = 'grid sm:grid-cols-1 place-items-center';

const weatherIcon = document.querySelector('#image');
weatherIcon.classList = 'm-auto';

const weatherWind = document.querySelector('#wind');
weatherWind.classList = 'flex flex-col items-center justify-center xxs:flex-row';

const weatherWindDirection = document.querySelector('#wind-direction');
const weatherWindPower = document.querySelector('#wind-power');
weatherWindPower.classList = 'px-1 font-medium text-xs xxs:text-sm';
weatherWindDirection.classList = 'px-1 font-medium capitalize text-xs xxs:text-sm border-r-2';

const weatherTemperature = document.querySelector('#temperature');
weatherTemperature.classList = 'text-4xl font-medium py-4 px-2';

const feels = document.querySelector('#feels');
feels.classList = 'flex flex-col items-center';

const feelsTitle = document.querySelector('#feels p');
feelsTitle.classList = 'text-xs';

const feelsLike = document.querySelector('#feels-like');
feelsLike.classList = 'font-medium';

const windBlock = document.querySelector('#wind-block');
windBlock.classList = 'flex flex-col items-center';

const windBlockTitle = document.querySelector('#wind-block > p');
windBlockTitle.classList = 'text-xs capitalize';

const currentDate = document.querySelector('#date');
currentDate.classList = 'text-lg font-normal';

const weatherMain = document.querySelector('#weather-main');
weatherMain.classList = 'capitalize font-medium text-xl p-2';

const auxilaryInfo = document.querySelector('#aux-info');
auxilaryInfo.classList = 'grid grid-cols-2 grid-rows-auto gap-1';

const humidityBrick = document.querySelector('#humidity');
humidityBrick.classList = 'text-center';
const humidityTitle = document.querySelector('#humidity-title');
humidityTitle.classList = 'text-xs';
const humidityData = document.querySelector('#humidity-data');
humidityData.classList = 'font-medium';

const pressureBrick = document.querySelector('#pressure');
pressureBrick.classList = 'text-center';
const pressureTitle = document.querySelector('#press-title');
pressureTitle.classList = 'text-xs';
const pressureData = document.querySelector('#press-data');
pressureData.classList = 'font-medium';

[feels, windBlock, humidityBrick, pressureBrick].forEach((el) => {
  el.classList = 'p-2 border-2 border-solid text-center';
});
