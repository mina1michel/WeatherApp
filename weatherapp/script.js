const search = document.querySelector(".search input");
const btn_search = document.querySelector(".search button");
const weather_img = document.querySelector(".weather-img");

const api = async function (s) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=cb84c127a9fa400690f220336241704&q=${s}&aqi=no`
  );
  const { location, current } = await data.json();
  console.log(location, current);

  document.querySelector(".weather-head").textContent = current.temp_c + "°C";

  document.querySelector(".city-name").textContent = location.name;

  document.querySelector(".humd").textContent = current.humidity + "%";

  document.querySelector(".wind").textContent =
    Math.round(current.wind_kph) + "km/h";

  weather_img.src = current.condition.icon;
};

btn_search.addEventListener("click", function () {
  api(search.value);
  weather_img.style.opacity = 1;
});
