feather.replace();

// api key
const apiKey = "7e1ac7724b9183803802615e5e8952ab";
const apiUrl =
   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Indonesia";

const checkWeather = async () => {
   const response = await fetch(apiUrl + `&appid=${apiKey}`);
   var data = await response.json();
   console.log(data);

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = data.main.temp + " °c";
   document.querySelector(".humidity-percentage").innerHTML =
      data.main.humidity + " %";
   document.querySelector(".wind-speed-kmh").innerHTML =
      data.wind.speed + " km/h";
};

checkWeather();
