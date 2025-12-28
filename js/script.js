async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // You must get this from openweathermap.org
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // The "Smart" Logic: Providing advice instead of just numbers
        let advice = "";
        if (data.main.temp > 25) {
            advice = "It's quite warm! Stay hydrated and wear light clothes.";
        } else if (data.weather[0].main === "Rain") {
            advice = "It's raining! Carry an umbrella or stay indoors.";
        } else {
            advice = "The weather is pleasant. Great day for a walk!";
        }

        document.getElementById('weatherDisplay').innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p><strong>Advice:</strong> ${advice}</p>
        `;
    } catch (error) {
        alert("City not found. Please try again.");
    }
}

document.getElementById('searchBtn').addEventListener('click', getWeather);
