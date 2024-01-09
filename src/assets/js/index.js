// api key
const apiKey = '7e1ac7724b9183803802615e5e8952ab'
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Indonesia'

const countryName = document.querySelector('.city');
const maxTemp = document.querySelector('.max-temp');
const minTemp = document.querySelector('.min-temp');
const currentTemp = document.querySelector('.temp');
const weatherDesc = document.querySelector('.weather-desc');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const pressure = document.querySelector('.pressure');
const visibility = document.querySelector('.visibility');
const groundLevel = document.querySelector('.ground-level');
const seaLevel = document.querySelector('.sea-level');
const timezone = document.querySelector('.timezone');
const base = document.querySelector('.base');



const checkWeather = async () => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`)
  var data = await response.json()
  console.log(data)

  const sunriseDate = new Date(data.sys.sunrise * 1000)
  const sunsetDate = new Date(data.sys.sunset * 1000)

  // formatted times
  const formattedSunrise = formatTime(sunriseDate);
  const formattedSunset = formatTime(sunsetDate);

  countryName.innerHTML = data.name
  maxTemp.innerHTML = data.main.temp_max
  minTemp.innerHTML = data.main.temp_min
  currentTemp.innerHTML = data.main.temp
  weatherDesc.innerHTML =
    data.weather[0].description
  humidity.innerHTML = data.main.humidity
  windSpeed.innerHTML = data.wind.speed + ' km/h'
  sunrise.innerHTML = formattedSunrise
  sunset.innerHTML = formattedSunset
  pressure.innerHTML = data.main.pressure + ' hPa'
  visibility.innerHTML = data.visibility + ' meters'
  groundLevel.innerHTML = data.main.grnd_level + ' hPa'
  seaLevel.innerHTML = data.main.sea_level + ' hPa'
  base.innerHTML = data.base
  timezone.innerHTML = data.timezone
}

checkWeather()


// function convert sunrise and sunset to UTC 
const formatTime = (date) => {
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes} UTC`
}