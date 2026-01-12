"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const inquiryTopics = [
  "General Information",
  "Career Opportunities",
  "Partnership Inquiry",
  "Press & Media",
  "Vendor Registration",
  "Other",
]

export function GeneralInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "inquiry",
          ...formData,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-medium text-foreground">Message Sent</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6 rounded-full">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inquiryName">Full Name *</Label>
          <Input
            id="inquiryName"
            placeholder="Your name"
            required
            className="rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiryEmail">Email Address *</Label>
          <Input
            id="inquiryEmail"
            type="email"
            placeholder="your@email.com"
            required
            className="rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryTopic">Topic *</Label>
        <Select required value={formData.topic} onValueChange={(value) => setFormData({ ...formData, topic: value })}>
          <SelectTrigger className="rounded-lg">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTopics.map((topic) => (
              <SelectItem key={topic} value={topic.toLowerCase().replace(/\s+/g, "-")}>
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquirySubject">Subject *</Label>
        <Input
          id="inquirySubject"
          placeholder="Brief subject line"
          required
          className="rounded-lg"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryMessage">Message *</Label>
        <Textarea
          id="inquiryMessage"
          placeholder="How can we help you?"
          required
          className="min-h-[150px] rounded-lg resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full rounded-full" size="lg">
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
