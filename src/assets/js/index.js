console.log(document.querySelector(".temp"));

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

// Burger menus
document.addEventListener("DOMContentLoaded", function () {
   // open
   const burger = document.querySelectorAll(".navbar-burger");
   const menu = document.querySelectorAll(".navbar-menu");

   if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
         burger[i].addEventListener("click", function () {
            for (var j = 0; j < menu.length; j++) {
               menu[j].classList.toggle("hidden");
            }
         });
      }
   }

   // close
   const close = document.querySelectorAll(".navbar-close");
   const backdrop = document.querySelectorAll(".navbar-backdrop");

   if (close.length) {
      for (var i = 0; i < close.length; i++) {
         close[i].addEventListener("click", function () {
            for (var j = 0; j < menu.length; j++) {
               menu[j].classList.toggle("hidden");
            }
         });
      }
   }

   if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
         backdrop[i].addEventListener("click", function () {
            for (var j = 0; j < menu.length; j++) {
               menu[j].classList.toggle("hidden");
            }
         });
      }
   }
});
