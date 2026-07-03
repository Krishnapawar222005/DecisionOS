"use client";

import { useEffect, useState } from "react";

import SearchBar from "@/components/location/SearchBar";
import GoogleMapView from "@/components/location/GoogleMapView";
import WeatherCards from "@/components/location/WeatherCards";
import AQICard from "@/components/location/AQICard";
import EmergencyContacts from "@/components/location/EmergencyContacts";
import AIRiskPanel from "@/components/location/AIRiskPanel";
import ExecutiveReport from "@/components/location/ExecutiveReport";
import AnalyticsDashboard from "@/components/location/AnalyticsDashboard";
import DashboardKPIs from "@/components/location/DashboardKPIs";

import { getWeather } from "@/lib/weather";
import { getAQI } from "@/lib/aqi";
import { getAIRisk } from "@/lib/aiRisk";
import { emergencyContacts } from "@/lib/emergencyContacts";
import { saveHistory } from "@/lib/history";

interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  description: string;
}

interface AQIData {
  aqi: number;
  pm25: number;
  pm10: number;
  co: number;
  no2: number;
  so2: number;
  o3: number;
  nh3: number;
}

export default function LocationPage() {
  const [loading, setLoading] = useState(false);

  const [position, setPosition] = useState({
    lat: 17.6868,
    lng: 83.2185,
  });

  const [weather, setWeather] = useState<WeatherData>({
    temp: 0,
    humidity: 0,
    wind: 0,
    description: "Loading...",
  });

  const [aqi, setAQI] = useState<AQIData>({
    aqi: 0,
    pm25: 0,
    pm10: 0,
    co: 0,
    no2: 0,
    so2: 0,
    o3: 0,
    nh3: 0,
  });

  const [aiReport, setAIReport] = useState("");

  function onCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setPosition({
          lat,
          lng,
        });

        try {
          // Weather
          const weatherData = await getWeather(lat, lng);
          setWeather(weatherData);

          // AQI
          const aqiData = await getAQI(lat, lng);
          setAQI(aqiData);

          // AI Report
          const ai = await getAIRisk({
            temp: weatherData.temp,
            humidity: weatherData.humidity,
            wind: weatherData.wind,
            description: weatherData.description,
            aqi: aqiData.aqi,
          });

          setAIReport(ai.report);

          // Save History
          saveHistory({
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            temp: weatherData.temp,
            humidity: weatherData.humidity,
            wind: weatherData.wind,
            aqi: aqiData.aqi,
          });
        } catch (error) {
          console.error(error);
        }

        setLoading(false);
      },
      (err) => {
        console.error(err);
        alert("Unable to fetch current location.");
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }

  useEffect(() => {
    onCurrentLocation();
  }, []);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <SearchBar
          loading={loading}
          onCurrentLocation={onCurrentLocation}
        />

        <WeatherCards
          temp={weather.temp}
          humidity={weather.humidity}
          wind={weather.wind}
          description={weather.description}
        />

        <AQICard
          aqi={aqi.aqi}
          pm25={aqi.pm25}
          pm10={aqi.pm10}
        />

        <GoogleMapView
          lat={position.lat}
          lng={position.lng}
        />

        <EmergencyContacts
          contacts={emergencyContacts}
        />

        <AIRiskPanel
          report={aiReport}
        />

        <ExecutiveReport
          weather={weather}
          aqi={{
            aqi: aqi.aqi,
            pm25: aqi.pm25,
            pm10: aqi.pm10,
          }}
          aiReport={aiReport}
        />

        <DashboardKPIs
          temp={weather.temp}
          humidity={weather.humidity}
          wind={weather.wind}
          aqi={aqi.aqi}
        />

        <AnalyticsDashboard />

      </div>
    </main>
  );
}