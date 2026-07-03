import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is missing.");
}

const ai = new GoogleGenAI({
  apiKey: apiKey || "",
});

export async function POST(req: NextRequest) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "GEMINI_API_KEY is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    const prompt = `
You are an Emergency Management AI.

Analyze these conditions and produce a concise executive risk assessment.

Temperature: ${body.temp} °C
Humidity: ${body.humidity} %
Wind Speed: ${body.wind} m/s
Weather: ${body.description}
AQI: ${body.aqi}

Respond ONLY in this format:

Risk Level:
Summary:
Recommendations:
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      report: response.text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to generate AI report.",
      },
      { status: 500 }
    );
  }
}