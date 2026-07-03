"use client";

interface AQICardProps {
  aqi: number;
  pm25: number;
  pm10: number;
}

function getAQIStatus(aqi: number) {
  switch (aqi) {
    case 1:
      return {
        text: "Good",
        color: "text-green-600",
      };

    case 2:
      return {
        text: "Fair",
        color: "text-lime-600",
      };

    case 3:
      return {
        text: "Moderate",
        color: "text-yellow-600",
      };

    case 4:
      return {
        text: "Poor",
        color: "text-orange-600",
      };

    case 5:
      return {
        text: "Very Poor",
        color: "text-red-600",
      };

    default:
      return {
        text: "Unknown",
        color: "text-gray-600",
      };
  }
}

export default function AQICard({
  aqi,
  pm25,
  pm10,
}: AQICardProps) {
  const status = getAQIStatus(aqi);

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        🌫 Air Quality Index
      </h2>

      <div className="mt-6 space-y-3">

        <h3 className={`text-4xl font-bold ${status.color}`}>
          AQI {aqi}
        </h3>

        <p className={`text-xl font-semibold ${status.color}`}>
          {status.text}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4">

          <div className="rounded-xl bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              PM2.5
            </p>

            <p className="text-2xl font-bold">
              {pm25.toFixed(2)}
            </p>
          </div>

          <div className="rounded-xl bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              PM10
            </p>

            <p className="text-2xl font-bold">
              {pm10.toFixed(2)}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}