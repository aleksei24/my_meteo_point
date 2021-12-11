const today = document.querySelector('#date');
const currentDate = new Date();
today.innerHTML = currentDate.toLocaleDateString('ru-RU');
