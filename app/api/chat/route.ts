import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

// Mock responses for common questions to avoid using API credits
const MOCK_RESPONSES: Record<string, string> = {
  "how do i sell my license":
    "Selling your license is easy! Just follow our 3-step process: 1) Upload your license details through our secure portal, 2) Receive a valuation based on current market demand, and 3) Once approved, get paid within 3-5 business days.",

  "what types of licenses do you accept":
    "We accept a wide range of software licenses including Microsoft, Adobe, Autodesk, Oracle, VMware, and many others. Both perpetual and subscription licenses can be evaluated, though their valuation differs based on type and remaining term.",

  "how long does the process take":
    "The entire process typically takes 5-10 business days from submission to payment. License verification takes 1-2 days, finding a buyer takes 2-5 days, and processing payment takes 2-3 days after the sale is complete.",

  "is my data secure":
    "We take security very seriously. All license data is encrypted using industry-standard protocols, and we're compliant with major data protection regulations. We never share your information with unauthorized third parties.",
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    // Check if we have a mock response for this question
    const normalizedMessage = message.toLowerCase().trim()

    for (const [key, response] of Object.entries(MOCK_RESPONSES)) {
      if (normalizedMessage.includes(key)) {
        // Add a small delay to simulate processing
        await new Promise((resolve) => setTimeout(resolve, 500))
        return NextResponse.json({ message: response })
      }
    }

    // If we have an OpenAI API key, use it
    if (process.env.OPENAI_API_KEY) {
      const { text } = await generateText({
        model: openai("gpt-3.5-turbo"),
        prompt: message,
        system:
          "You are a helpful assistant for SoftSell, a software license resale platform. Provide concise, accurate information about selling software licenses, the process, and the company. Keep responses under 150 words and focus on being helpful and professional.",
      })

      return NextResponse.json({ message: text })
    } else {
      // Fallback generic response if no mock match and no API key
      return NextResponse.json({
        message:
          "Thank you for your question! SoftSell specializes in helping businesses recover value from unused software licenses. Our process is secure, compliant, and designed to get you the best possible value. For more specific information, please contact our support team or schedule a consultation through our website.",
      })
    }
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
