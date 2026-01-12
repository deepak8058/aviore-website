import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, ...formData } = body

    // Determine recipient based on form type
    let recipient = ""
    let subject = ""

    switch (formType) {
      case "quotation":
        recipient = "shashank@aviore.space"
        subject = `New Quote Request from ${formData.firstName} ${formData.lastName}`
        break
      case "feedback":
        recipient = "contact@aviore.space"
        subject = `New Feedback: ${formData.subject}`
        break
      case "inquiry":
        recipient = "contact@aviore.space"
        subject = `New Inquiry: ${formData.subject}`
        break
      default:
        return NextResponse.json({ error: "Invalid form type" }, { status: 400 })
    }

    // Format the email body
    const emailBody = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")

    // Log for debugging (in production, integrate with email service like Resend, SendGrid, etc.)
    console.log("=== EMAIL SUBMISSION ===")
    console.log("To:", recipient)
    console.log("Subject:", subject)
    console.log("Body:", emailBody)
    console.log("========================")

    // In production, you would integrate with an email service here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Aviore Website <noreply@aviore.space>',
    //   to: recipient,
    //   subject: subject,
    //   text: emailBody,
    // })

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      recipient, // For debugging
    })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}
