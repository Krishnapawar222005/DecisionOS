import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: apiKey || "",
});

export async function POST(req: NextRequest) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "GEMINI_API_KEY is missing in Vercel Environment Variables.",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    const prompt = `
You are DecisionOS AI, an advanced Predictive Decision Intelligence system built for governments, emergency responders, and smart cities.

Your task is to analyze LIVE environmental conditions and predict what is MOST LIKELY to happen during the NEXT 6 HOURS.

Current Conditions

Temperature: ${body.temp} °C
Humidity: ${body.humidity} %
Wind Speed: ${body.wind} m/s
Weather: ${body.description}
Air Quality Index (AQI): ${body.aqi}

Using these live conditions:

• Predict possible future events.
• Estimate overall community risk.
• Explain your reasoning.
• Recommend preventive actions.
• Think like an Emergency Operations Center.

Respond ONLY in the following format:

==================================================

🔮 AI PREDICTIVE DECISION REPORT

Predictive Risk Score:
(0-100)

Prediction Confidence:
(0-100%)

Next 6-Hour Outlook:
(Describe expected conditions.)

Potential Risks:
- Bullet 1
- Bullet 2
- Bullet 3

Recommended Actions:
- Bullet 1
- Bullet 2
- Bullet 3
- Bullet 4
- Bullet 5

Reasoning:
(Explain WHY the prediction was made using temperature, humidity, wind, weather and AQI.)

Executive Summary:
(A concise paragraph suitable for city officials.)

==================================================
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return NextResponse.json({
      report: response.text ?? "No AI response generated.",
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    const message =
      error instanceof Error ? error.message : "Unknown Gemini error.";

    if (
      message.includes("RESOURCE_EXHAUSTED") ||
      message.includes("Quota exceeded") ||
      message.includes("429")
    ) {
      return NextResponse.json({
        report: `

🔮 AI Predictive Decision Report

AI Prediction is temporarily unavailable because the Gemini API free quota has been reached.

DecisionOS will continue providing:

✅ Live Weather Monitoring
✅ Air Quality Monitoring
✅ Live Location Intelligence
✅ Emergency Contacts
✅ Decision Dashboard

Please try again later when AI quota becomes available.

`,
      });
    }

    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 }
    );
  }
}