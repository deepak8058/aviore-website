"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const feedbackTypes = [
  { value: "feedback", label: "General Feedback" },
  { value: "complaint", label: "Complaint" },
  { value: "suggestion", label: "Suggestion" },
  { value: "compliment", label: "Compliment" },
]

export function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "",
    projectRef: "",
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
          formType: "feedback",
          ...formData,
          rating,
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
        <h3 className="font-serif text-2xl font-medium text-foreground">Thank You</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Your feedback has been received. We value your input and will review it promptly.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setRating(0)
          }}
          variant="outline"
          className="mt-6 rounded-full"
        >
          Submit Another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="feedbackName">Full Name *</Label>
          <Input
            id="feedbackName"
            placeholder="Your name"
            required
            className="rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="feedbackEmail">Email Address *</Label>
          <Input
            id="feedbackEmail"
            type="email"
            placeholder="your@email.com"
            required
            className="rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="feedbackType">Feedback Type *</Label>
          <Select
            required
            value={formData.feedbackType}
            onValueChange={(value) => setFormData({ ...formData, feedbackType: value })}
          >
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {feedbackTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectRef">Project Reference (Optional)</Label>
          <Input
            id="projectRef"
            placeholder="Project name or ID"
            className="rounded-lg"
            value={formData.projectRef}
            onChange={(e) => setFormData({ ...formData, projectRef: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Overall Experience</Label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <Star
                className={cn(
                  "h-7 w-7 transition-colors",
                  (hoverRating || rating) >= star ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30",
                )}
              />
            </button>
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            {rating > 0 && ["Poor", "Fair", "Good", "Very Good", "Excellent"][rating - 1]}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="feedbackSubject">Subject *</Label>
        <Input
          id="feedbackSubject"
          placeholder="Brief subject line"
          required
          className="rounded-lg"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="feedbackMessage">Your Message *</Label>
        <Textarea
          id="feedbackMessage"
          placeholder="Please share your detailed feedback, suggestions, or concerns..."
          required
          className="min-h-[150px] rounded-lg resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full rounded-full" size="lg">
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Submit Feedback
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
