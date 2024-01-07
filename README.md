# Weather App

This weather app is built using JavaScript, HTML, and CSS. It fetches weather data from the SheCodes.io weather API and displays the current weather conditions and a 5-day forecast for a specified city.

## How to Use

To use the app, simply enter the name of a city in the search box and click the "Search" button. The app will then fetch the weather data for that city and display it on the screen.

## Code Overview

The code for this app is organized into three main files:

- `index.html`: This file contains the HTML markup for the app. It includes the search box, the weather display area, and the forecast display area.
- `app.js`: This file contains the JavaScript code for the app. It handles the user interaction, fetches the weather data from the API, and displays the data on the screen.
- `style.css`: This file contains the CSS styles for the app. It controls the appearance of the app, including the layout, colors, and fonts.

## Step-by-Step Explanation

Here is a step-by-step explanation of how the code works:

1. The user enters a city name in the search box and clicks the "Search" button.
2. The `search()` function is called. This function prevents the default form submission behavior and calls the `displayWeather()` function.
3. The `displayWeather()` function is called. This function fetches the weather data from the SheCodes.io weather API using the `axios` library.
4. The API returns the weather data in JSON format. The `displayWeather()` function parses the JSON data and updates the weather display area with the current weather conditions.
5. The `getForecast()` function is called. This function fetches the 5-day forecast data from the SheCodes.io weather API using the `axios` library.
6. The API returns the forecast data in JSON format. The `displayForecast()` function parses the JSON data and updates the forecast display area with the 5-day forecast.

## Conclusion

This weather app is a simple but powerful example of how to use JavaScript, HTML, and CSS to create a functional web application. The app is easy to use and understand, and it can be easily customized to meet the needs of different users.
