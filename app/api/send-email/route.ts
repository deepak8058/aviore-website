import { type NextRequest, NextResponse } from "next/server"
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend('re_6dYZqAP9_4qTSSZSWGR5kej7C6BUoNf1W');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, ...formData } = body

    let recipient = ""
    let subject = ""

    switch (formType) {
      case "quotation":
        recipient = "shashank@aviore.space"
        subject = `New Quote Request from ${formData.firstName} ${formData.lastName}`
        break
      case "feedback":
        recipient = "contact@aviore.space"
        subject = `New Feedback from ${formData.email}`
        break
      case "inquiry":
        recipient = "contact@aviore.space"
        subject = `New Inquiry from ${formData.email}`
        break
      default:
        return NextResponse.json({ error: "Invalid form type" }, { status: 400 })
    }

    const emailBody = Object.entries(formData)
      .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
      .join("<br/>")

    // THE ACTUAL SENDING LOGIC
    await resend.emails.send({
      from: 'Aviore <onboarding@resend.dev>', // Change this to your domain later
      to: recipient,
      subject: subject,
      html: `<p>You have a new submission from your website:</p>${emailBody}`,
    });

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}