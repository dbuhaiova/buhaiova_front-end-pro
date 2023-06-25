const city = 'Dnipro';
const weatherInfoElement = document.getElementById('weather');

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
    const deg = data.wind.deg;

    const weatherHTML = `
      <p>Температура: ${temp} C;</p>
      <p>Тиск: ${pressure} гПа</p>
      <p>Опис: ${description}</p>
      <p>Вологість: ${humidity}%</p>
      <p>Швидкість вітру: ${speed} м/с</p>
      <p>Напрям вітру: ${deg} градусів</p>
      <img src="http://openweathermap.org/img/w/10d.png" alt="">`;

    weatherInfoElement.innerHTML = weatherHTML;
  })
  .catch(error => {
    console.log('Помилка' , error);
  });
