import React, { useState, useEffect } from 'react';

const MyCity = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.4501&longitude=30.5234&current_weather=true');
        const data = await response.json();
        setWeatherData({
          temp: data.current_weather.temperature,
          windSpeed: data.current_weather.windspeed,
          lat: data.latitude,
          lon: data.longitude
        });
        setLoading(false);
      } catch (error) {
        console.error("Помилка при завантаженні погоди:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className="bg-white p-8 rounded-t-lg shadow-sm">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Київ, Україна 🇺🇦</h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Київ — столиця та найбільше місто України. Це місто з більш ніж 1500-річною історією, 
          що гармонійно поєднує в собі величні історичні пам'ятки, такі як Софійський собор 
          та Києво-Печерська лавра, із сучасним ритмом мегаполіса та технологічним розвитком.
        </p>
      </div>

      <div className="bg-blue-600 text-white p-8 rounded-b-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Поточна погода</h2>
        {loading ? (
          <p className="animate-pulse">Завантаження даних...</p>
        ) : weatherData ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-700 p-4 rounded">
              <p className="text-sm text-blue-200">Температура</p>
              <p className="text-3xl font-bold">{weatherData.temp}°C</p>
            </div>
            <div className="bg-blue-700 p-4 rounded">
              <p className="text-sm text-blue-200">Швидкість вітру</p>
              <p className="text-3xl font-bold">{weatherData.windSpeed} км/год</p>
            </div>
            <div className="bg-blue-700 p-4 rounded col-span-2">
              <p className="text-sm text-blue-200">Координати</p>
              <p className="text-lg">Широта: {weatherData.lat} | Довгота: {weatherData.lon}</p>
            </div>
          </div>
        ) : (
          <p>Не вдалося завантажити дані погоди.</p>
        )}
      </div>
    </div>
  );
};

export default MyCity;