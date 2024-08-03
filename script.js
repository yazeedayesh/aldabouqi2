<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather Widget</title>
  <style>
    #weather {
      font-family: Arial, sans-serif;
      margin: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 300px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div id="weather">
    <h2>Current Weather</h2>
    <p id="location">Location: </p>
    <p id="temperature">Temperature: </p>
    <p id="description">Description: </p>
  </div>

  <script>
    const apiKey = '90b375c40f7c05cf097a359ed6433ae1'; // استبدل بـ API Key الخاص بك
    const city = 'Amman'; // استبدل بالمدينة التي ترغب في عرض الطقس لها
    const weatherElement = document.getElementById('weather');

    async function getWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        const location = `${data.name}, ${data.sys.country}`;
        const temperature = `${data.main.temp}°C`;
        const description = data.weather[0].description;

        document.getElementById('location').textContent = `Location: ${location}`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
        document.getElementById('description').textContent = `Description: ${description.charAt(0).toUpperCase() + description.slice(1)}`;
      } catch (error) {
        weatherElement.innerHTML = `<p>Error fetching weather data.</p>`;
        console.error('Error:', error);
      }
    }

    getWeather();
  </script>
</body>
</html>
