"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const projectTypes = [
  "Glass Facades",
  "Curtain Wall Systems",
  "Aluminum Partitions",
  "Skylights",
  "Storefront Systems",
  "Residential Glass",
  "Custom Solutions",
  "Other",
]

const budgetRanges = [
  "Under ₹5,00,000",
  "₹5,00,000 - ₹15,00,000",
  "₹15,00,000 - ₹50,00,000",
  "₹50,00,000 - ₹1,00,00,000",
  "₹1,00,00,000+",
  "Not Sure",
]

export function QuotationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    location: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "quotation",
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
        <h3 className="font-serif text-2xl font-medium text-foreground">Request Received</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thank you for your interest. Our team will review your project details and contact you within 24-48 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6 rounded-full">
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            placeholder="John"
            required
            className="rounded-lg"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            required
            className="rounded-lg"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            className="rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="rounded-lg"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company / Organization</Label>
        <Input
          id="company"
          placeholder="Company Name"
          className="rounded-lg"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type *</Label>
          <Select
            required
            value={formData.projectType}
            onValueChange={(value) => setFormData({ ...formData, projectType: value })}
          >
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Estimated Budget</Label>
          <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range.toLowerCase().replace(/\s+/g, "-")}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Project Location *</Label>
        <Input
          id="location"
          placeholder="City, State"
          required
          className="rounded-lg"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description *</Label>
        <Textarea
          id="description"
          placeholder="Please describe your project requirements, timeline, and any specific details..."
          required
          className="min-h-[150px] rounded-lg resize-none"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="attachments">Attachments (Optional)</Label>
        <p className="text-xs text-muted-foreground mb-2">Upload drawings, references, or specifications (Max 10MB)</p>
        <Input
          id="attachments"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.dwg"
          className="rounded-lg file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full rounded-full" size="lg">
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Submit Request
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
