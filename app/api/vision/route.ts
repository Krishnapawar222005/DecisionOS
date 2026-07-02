import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt, image, mimeType } = await req.json();

    if (!image) {
      return NextResponse.json(
        {
          success: false,
          result: "No image received.",
        },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are DecisionOS AI.

Analyze this incident image together with the user's description.

Description:
${prompt || "No description provided."}

Return:

Summary:
Risk Level:
Visible Hazards:
Recommendations:
Confidence:
              `,
            },
            {
              inlineData: {
                mimeType: mimeType || "image/jpeg",
                data: image,
              },
            },
          ],
        },
      ],
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
        result: "Vision analysis failed.",
      },
      { status: 500 }
    );
  }
}