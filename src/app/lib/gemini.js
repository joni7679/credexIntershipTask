
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = process.env.GEMINI_API_KEY;
console.log(process.env.GEMINI_API_KEY);
if (!API_KEY) {
    console.log("Gemini api key is missing plz enter api key your env file");
}
const genAI = new GoogleGenerativeAI(API_KEY);
export async function analyze(auditResults) {
    const prompt = `
You are an AI Spend Optimization Assistant.

Analyze the following audit results and generate a concise business report.

Audit Results:
${JSON.stringify(auditResults)}

Instructions:
1. Write a professional audit summary.
2. Mention key savings opportunities.
3. Highlight recommendations such as upgrade, downgrade, switch, or keep.
4. Mention estimated monthly and annual savings.
5. Mention suggested alternative tools if available.
6. Keep the response under 150 words.
7. No markdown, no bullet points, plain text only.
`;
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        let response = result.response.text();
        console.log("Raw Gemini Response:", response);
        return response
    } catch (error) {
        console.error("Error analyzing resume:", error);
    }
}