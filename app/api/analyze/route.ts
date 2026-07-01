import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const prompt = body.prompt;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are DecisionOS AI.

Analyze this community incident:

${prompt}

Return your response in this exact format:

Summary:
Risk Level:
Recommendations:
- Recommendation 1
- Recommendation 2
- Recommendation 3

Confidence:
`,
    });

    return NextResponse.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        result: "Failed to analyze incident.",
      },
      { status: 500 }
    );
  }
}