'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Clipboard, Linkedin } from 'lucide-react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ name, email, message })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard');
  }

  return (
    <div className="flex gap-8 mb-16">
      {/* Contact Form Card */}
      <Card className="flex-1 bg-[#1C1C1F]/50 border-gray-800">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>

      {/* Connect with Us Card */}
      <Card className="flex-1 bg-[#1C1C1F]/50 border-gray-800">
        <CardHeader>
          <CardTitle>Connect with Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between"
              onClick={handleCopyEmail}
            >
              <span>Copy Email</span>
              <Clipboard className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-between"
              asChild
            >
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" className="flex items-center justify-between">
                <span>Connect on LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
