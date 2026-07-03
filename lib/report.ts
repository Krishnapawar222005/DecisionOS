import jsPDF from "jspdf";

interface ReportData {
  weather: {
    temp: number;
    humidity: number;
    wind: number;
    description: string;
  };
  aqi: {
    aqi: number;
    pm25: number;
    pm10: number;
  };
  aiReport: string;
}

export function generateExecutiveReport(data: ReportData) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("DecisionOS", 20, y);

  y += 10;

  doc.setFontSize(16);
  doc.text("Executive Situation Report", 20, y);

  y += 20;

  doc.setFontSize(14);
  doc.text("Weather", 20, y);

  y += 10;
  doc.setFontSize(12);
  doc.text(`Temperature : ${data.weather.temp} °C`, 20, y);

  y += 8;
  doc.text(`Humidity : ${data.weather.humidity}%`, 20, y);

  y += 8;
  doc.text(`Wind : ${data.weather.wind} m/s`, 20, y);

  y += 8;
  doc.text(`Condition : ${data.weather.description}`, 20, y);

  y += 18;

  doc.setFontSize(14);
  doc.text("Air Quality", 20, y);

  y += 10;

  doc.setFontSize(12);
  doc.text(`AQI : ${data.aqi.aqi}`, 20, y);

  y += 8;
  doc.text(`PM2.5 : ${data.aqi.pm25}`, 20, y);

  y += 8;
  doc.text(`PM10 : ${data.aqi.pm10}`, 20, y);

  y += 18;

  doc.setFontSize(14);
  doc.text("AI Risk Assessment", 20, y);

  y += 10;

  doc.setFontSize(11);

  const lines = doc.splitTextToSize(
    data.aiReport,
    170
  );

  doc.text(lines, 20, y);

  doc.save("DecisionOS_Report.pdf");
}