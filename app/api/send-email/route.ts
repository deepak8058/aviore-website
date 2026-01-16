import { type NextRequest, NextResponse } from "next/server"
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

export async function POST(request: NextRequest) {
  // Check if key is actually missing during the request
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }
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
      from: 'Aviore <noreply@aviore.space>', // Change this to your domain later
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