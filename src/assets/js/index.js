// api key
const apiKey = '7e1ac7724b9183803802615e5e8952ab'
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Indonesia'

const checkWeather = async () => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`)
  var data = await response.json()
  console.log(data)

  document.querySelector('.city').innerHTML = data.name
  document.querySelector('.max-temp').innerHTML = data.main.temp_max
  document.querySelector('.min-temp').innerHTML = data.main.temp_min
  document.querySelector('.temp').innerHTML = data.main.temp
  document.querySelector('.weather-desc').innerHTML =
    data.weather[0].description
  document.querySelector('.humidity').innerHTML = data.main.humidity
  document.querySelector('.wind-speed').innerHTML = data.wind.speed + ' km/h'
  document.querySelector('.sunrise').innerHTML = data.sys.sunrise
  document.querySelector('.sunset').innerHTML = data.sys.sunset
  document.querySelector('.pressure').innerHTML = data.main.pressure
  document.querySelector('.visibility').innerHTML = data.visibility
  document.querySelector('.ground-level').innerHTML = data.main.grnd_level
  document.querySelector('.sea-level').innerHTML = data.main.sea_level
  document.querySelector('.base').innerHTML = data.base
  document.querySelector(".timezone").innerHTML = data.timezone
}

checkWeather()