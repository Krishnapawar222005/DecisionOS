export interface AIRiskRequest {
  temp: number;
  humidity: number;
  wind: number;
  description: string;
  aqi: number;
}

export async function getAIRisk(data: AIRiskRequest) {
  const response = await fetch("/api/ai-risk", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Unable to generate AI report.");
  }

  return response.json();
}