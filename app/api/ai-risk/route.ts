import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
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
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate AI report." },
      { status: 500 }
    );
  }
}