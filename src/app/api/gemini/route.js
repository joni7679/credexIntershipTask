import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.log("Gemini api key is missing");
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(req) {

    try {

        const body = await req.json();

        const prompt = `
You are an AI Spend Optimization Assistant.

Analyze the following audit results and generate a concise business report.

Audit Results:
${JSON.stringify(body.auditResults)}

Instructions:
1. Write a professional audit summary.
2. Mention key savings opportunities.
3. Highlight recommendations such as upgrade, downgrade, switch, or keep.
4. Mention estimated monthly and annual savings.
5. Mention suggested alternative tools if available.
6. Keep the response under 150 words.
7. No markdown, no bullet points, plain text only.
`;

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
        });

        const result = await model.generateContent(prompt);

        const response = result.response.text();

        console.log(response);

        return NextResponse.json({
            success: true,
            data: response,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json({
            success: false,
            message: error.message,
        }, {
            status: 500,
        });
    }
}