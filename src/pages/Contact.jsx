import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_mhfz5bn'
const EMAILJS_TEMPLATE_ID = 'template_wubrxv8'
const EMAILJS_PUBLIC_KEY  = 'FZaRNmuP3no5bo20A'

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-28 pb-16">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="nav-link text-text-secondary mb-3">04 Contact</p>
          <h1
            className="font-serif font-light mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}
          >
            Get in touch
          </h1>
          <p className="text-text-secondary mb-12" style={{ fontSize: '1.0625rem' }}>
            Have a question or just want to say hi? Fill out the form below and I'll get back to you.
          </p>

          <div className="card-surface p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <p className="font-serif text-2xl font-light mb-2">Thanks for reaching out!</p>
                <p className="text-text-secondary">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-border-warm bg-white/60 text-sm placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-text-primary/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl border border-border-warm bg-white/60 text-sm placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-text-primary/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message…"
                    className="w-full px-4 py-3 rounded-xl border border-border-warm bg-white/60 text-sm placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-text-primary/20 transition resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500">Something went wrong. Try emailing me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
