import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setNote('Please enter a valid email address.')
      return
    }
    setNote(`Thanks! ${email} is subscribed. 🎉`)
    setEmail('')
  }

  return (
    <section className="newsletter reveal" id="contact">
      <div className="purple-arc" />
      <h2>
        Subscribe to
        <br />
        our newsletter
      </h2>
      <p>To make your day special and even more memorable</p>

      <form className="subscribe-form" onSubmit={onSubmit} noValidate>
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="subscribe-btn">
          Subscribe Now
        </button>
      </form>
      <p className="subscribe-note" role="status">{note}</p>
    </section>
  )
}
