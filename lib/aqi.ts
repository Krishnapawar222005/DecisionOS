export interface AQIData {
  aqi: number;
  pm25: number;
  pm10: number;
  co: number;
  no2: number;
  so2: number;
  o3: number;
  nh3: number;
}

export async function getAQI(lat: number, lng: number): Promise<AQIData> {
  const response = await fetch(`/api/aqi?lat=${lat}&lng=${lng}`);

  if (!response.ok) {
    throw new Error("Unable to fetch AQI.");
  }

  const data = await response.json();

  const air = data.list[0];

  return {
    aqi: air.main.aqi,
    pm25: air.components.pm2_5,
    pm10: air.components.pm10,
    co: air.components.co,
    no2: air.components.no2,
    so2: air.components.so2,
    o3: air.components.o3,
    nh3: air.components.nh3,
  };
}