function search(event){
    event.preventDefault();
    let input = document.querySelector("#Search-text");
    let h2 = document.querySelector("#city");
    h2.innerHTML = `${input.value}`;
    let apiKey = "ec49etfea43b9bf6o7c77b0d49c77081";
    let city =  input.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response){
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = Math.round(response.data.temperature.current);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.temperature.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    let description = document.querySelector("#description");
    description.innerHTML = response.data.condition.description;
    if (description.innerHTML.length > 12) {
        description.style.fontSize = "1.2rem"; 
    }
    let icon = document.querySelector("#temp-icon");
    icon.src = response.data.condition.icon_url;
    getForecast(response.data.city);
}
function getForecast(city){
    let apiKey = "ec49etfea43b9bf6o7c77b0d49c77081";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayForecast);
}
function formatDay(timestamp){
    let date = new Date(timestamp * 1000);
    let days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    return days[date.getDay()];
}


function displayForecast(response){
    console.log(response.data);
    let forecastHtml = "";
    response.data.daily.forEach(function(day, index){
        if(index < 7 ){
        forecastHtml += `<div class="cards">
                <h4><span id="day">${formatDay(day.time)}</span></h4>
                <div class="degree">
                    <img src="${day.condition.icon_url}" class="imgForecast">
                    <p class="temperature">
                        <span id="temperature-max">${Math.round(day.temperature.maximum)}°</span>
                        |
                        <span id="temperature-min">${Math.round(day.temperature.minimum)}°</span>
                    </p>
                </div>
            </div>`;
        }
            let forecast = document.querySelector(".forecast");
            forecast.innerHTML= forecastHtml;
    });
}
window.addEventListener('load', function() {
    let apiKey = "ec49etfea43b9bf6o7c77b0d49c77081";
    let city = "Damascus";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
});
let searchcity = document.querySelector("#enter");
searchcity.addEventListener('click', search);
getForecast("paris");
