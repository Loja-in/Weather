function search(event){
event.preventDefault();
let searchInput = document.querySelector("#search");
let cityElement = document.querySelector("#city");
cityElement.innerHTML = `${searchInput.value}`;
let apiKey = "ec49etfea43b9bf6o7c77b0d49c77081";
let city =  searchInput.value;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(checkweather);
}
let form = document.querySelector("#form");
form.addEventListener('click', search);
