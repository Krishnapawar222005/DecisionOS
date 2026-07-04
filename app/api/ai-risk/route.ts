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
You are an Emergency Management AI.

Analyze the following live conditions and generate a professional executive report.

Temperature: ${body.temp} °C
Humidity: ${body.humidity} %
Wind Speed: ${body.wind} m/s
Weather: ${body.description}
AQI: ${body.aqi}

Respond ONLY in the following format:

Risk Level:
Summary:
Recommendations:
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

    // Handle quota / rate limit errors
    if (
      message.includes("RESOURCE_EXHAUSTED") ||
      message.includes("Quota exceeded") ||
      message.includes("429")
    ) {
      return NextResponse.json({
        report:
          "⚠️ AI Analysis is temporarily unavailable because the Gemini free-tier quota has been reached. Live Weather, AQI, and Maps are still working correctly. Please try again later.",
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