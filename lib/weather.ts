export interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  description: string;
}

export async function getWeather(
  lat: number,
  lng: number
): Promise<WeatherData> {
  const response = await fetch(
    `/api/weather?lat=${lat}&lng=${lng}`
  );

  const data = await response.json();

  console.log("Weather API:", data);

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to fetch weather."
    );
  }

  return {
    temp: data.main.temp,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    description: data.weather[0].description,
  };
}