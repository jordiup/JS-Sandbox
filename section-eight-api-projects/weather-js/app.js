// Init weather object
const weather = new Weather('Boston', 'MA');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Will return a promise since its async
function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
