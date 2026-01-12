"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QuotationForm } from "@/components/forms/quotation-form"
import { FeedbackForm } from "@/components/forms/feedback-form"
import { GeneralInquiryForm } from "@/components/forms/general-inquiry-form"
import { cn } from "@/lib/utils"

const formTabs = [
  { id: "quotation", label: "Request Quote", description: "Get a detailed quotation for your project" },
  { id: "feedback", label: "Feedback / Complaint", description: "Share your experience or concerns" },
  { id: "inquiry", label: "General Inquiry", description: "Other questions and inquiries" },
]

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Jaipur, Rajasthan", "India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 96494 31555"],
    href: "tel:+919649431555",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["shashank@aviore.space", "contact@aviore.space"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
]

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("quotation")

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="px-4 pb-12 pt-28 sm:pb-16 sm:pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Get In Touch</p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Let's Create
            <br />
            <span className="italic">Together</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you have a project in mind or simply want to learn more about our services, we'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10">
                  <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-medium text-foreground">{info.title}</h3>
                <div className="mt-1 sm:mt-2 space-y-1">
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-xs sm:text-sm text-muted-foreground break-words">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 py-12 sm:py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Form Tabs */}
            <div className="lg:col-span-1">
              <h2 className="mb-4 sm:mb-6 font-serif text-xl sm:text-2xl font-semibold text-foreground">
                How Can We Help?
              </h2>
              <div className="flex lg:flex-col gap-2 sm:gap-3 overflow-x-auto pb-2 lg:pb-0">
                {formTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex-shrink-0 lg:flex-shrink lg:w-full rounded-xl p-3 sm:p-4 text-left transition-all",
                      activeTab === tab.id ? "glass border-primary/30" : "bg-secondary/50 hover:bg-secondary",
                    )}
                  >
                    <p
                      className={cn(
                        "text-sm sm:text-base font-medium whitespace-nowrap lg:whitespace-normal",
                        activeTab === tab.id ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {tab.label}
                    </p>
                    <p className="hidden lg:block mt-1 text-sm text-muted-foreground">{tab.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                {activeTab === "quotation" && (
                  <>
                    <h3 className="mb-2 font-serif text-lg sm:text-xl font-medium text-foreground">
                      Request a Quotation
                    </h3>
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                      Fill out the form below and our team will prepare a detailed quote for your project.
                    </p>
                    <QuotationForm />
                  </>
                )}
                {activeTab === "feedback" && (
                  <>
                    <h3 className="mb-2 font-serif text-lg sm:text-xl font-medium text-foreground">
                      Share Your Feedback
                    </h3>
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                      Your feedback helps us improve. Let us know about your experience or any concerns.
                    </p>
                    <FeedbackForm />
                  </>
                )}
                {activeTab === "inquiry" && (
                  <>
                    <h3 className="mb-2 font-serif text-lg sm:text-xl font-medium text-foreground">General Inquiry</h3>
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                      Have a question or want to learn more? Send us a message.
                    </p>
                    <GeneralInquiryForm />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-12 sm:pb-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88514167956319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aviore Location - Jaipur, Rajasthan"
              className="grayscale sm:h-[400px]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
