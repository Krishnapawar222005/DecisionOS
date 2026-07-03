"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getWeather } from "@/lib/weather";
import { getAQI } from "@/lib/aqi";
import { getAIRisk } from "@/lib/aiRisk";

interface LiveData {
  weather: any;
  aqi: any;
  aiReport: string;
  loading: boolean;
  refresh: () => void;
}

const LiveDataContext = createContext<LiveData | null>(null);

export function LiveDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [weather, setWeather] = useState<any>(null);
  const [aqi, setAQI] = useState<any>(null);
  const [aiReport, setAIReport] = useState("");

  const [loading, setLoading] = useState(true);

  async function refresh() {
    if (!navigator.geolocation) return;

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        const weatherData = await getWeather(lat, lng);

        const aqiData = await getAQI(lat, lng);

        const ai = await getAIRisk({
          temp: weatherData.temp,
          humidity: weatherData.humidity,
          wind: weatherData.wind,
          description: weatherData.description,
          aqi: aqiData.aqi,
        });

        setWeather(weatherData);
        setAQI(aqiData);
        setAIReport(ai.report);

        setLoading(false);
      },
      console.error
    );
  }

  useEffect(() => {
    refresh();

    const interval = setInterval(refresh, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <LiveDataContext.Provider
      value={{
        weather,
        aqi,
        aiReport,
        loading,
        refresh,
      }}
    >
      {children}
    </LiveDataContext.Provider>
  );
}

export function useLiveData() {
  const context = useContext(LiveDataContext);

  if (!context) {
    throw new Error(
      "useLiveData must be used inside LiveDataProvider"
    );
  }

  return context;
}