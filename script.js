let weather = {
    apiKey: "9fee3454d83997e004917103a022c352",
    fetchWeather: function (city) {
      var city = document.getElementById("city").value;
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      document.querySelector(".city").innerText = "Weather in " + data.name;
      document.querySelector(".description").innerText = data.weather[0].description;
      document.querySelector(".temp").innerText = data.main.temp + "°C";
      document.querySelector(".sunrise").innerText = data.sys.sunrise;
      document.querySelector(".sunset").innerText = data.sys.sunset;
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
    weather.fetchWeather(london);