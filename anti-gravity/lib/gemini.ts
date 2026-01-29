import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(API_KEY);

export async function improveText(text: string, sectionTitle: string) {
    if (!API_KEY) {
        throw new Error("Gemini API Key is missing");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    You are an expert consultant for government support business plans in South Korea.
    Please review and improve the following text for the section "${sectionTitle}".
    
    Criteria for improvement:
    1. Professional and persuasive tone.
    2. Clear and concise language.
    3. Emphasize feasibility and growth potential.
    4. Fix any grammatical errors.

    Original Text:
    "${text}"

    Please provide the improved text only, without any introductory or concluding remarks.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}
