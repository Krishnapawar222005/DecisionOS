import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const {
      prompt,
      image,
      mimeType,
      pdfText,
    } = await req.json();

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

Analyze ALL available information.

========================
INCIDENT DESCRIPTION
========================
${prompt || "No description provided."}

========================
SUPPORTING PDF CONTENT
========================
${pdfText || "No PDF uploaded."}

========================
TASK
========================

Analyze the uploaded image together with the incident description and the PDF.

Return your answer in this exact format:

Summary:

Risk Level:

Visible Hazards:

Recommendations:
- Recommendation 1
- Recommendation 2
- Recommendation 3

Resources Required:

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