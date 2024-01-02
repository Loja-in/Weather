function search(event){
event.preventDefault();

let apiKey = "ec49etfea43b9bf6o7c77b0d49c77081";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;
axios.get(apiUrl).then(checkweather);
}

