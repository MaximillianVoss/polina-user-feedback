import { useState, type FormEvent } from 'react'
import FeedbackDisplay, { type SubmittedFeedback } from './FeedbackDisplay'
import './App.css'

export function UserFeedback() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [submittedFeedback, setSubmittedFeedback] =
    useState<SubmittedFeedback | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedName = name.trim()
    const normalizedMessage = message.trim()

    if (!normalizedName || !normalizedMessage) {
      setErrorMessage('Please enter both your name and message.')
      return
    }

    setSubmittedFeedback({
      name: normalizedName,
      message: normalizedMessage,
      submittedAt: new Date().toISOString(),
    })
    setErrorMessage('')
    setName('')
    setMessage('')
  }

  return (
    <main className="feedback-page">
      <section className="feedback-card" aria-labelledby="feedback-title">
        <div className="intro">
          <p className="eyebrow">Course feedback</p>
          <h1 id="feedback-title">Share your thoughts</h1>
          <p>Tell us what worked well and what could be improved.</p>
        </div>

        <form className="feedback-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="feedback-name">Name</label>
            <input
              id="feedback-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={Boolean(errorMessage) && !name.trim()}
            />
          </div>

          <div className="field">
            <label htmlFor="feedback-message">Message</label>
            <textarea
              id="feedback-message"
              name="message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              aria-invalid={Boolean(errorMessage) && !message.trim()}
            />
          </div>

          {errorMessage ? <p className="form-error" role="alert">{errorMessage}</p> : null}

          <button type="submit">Send</button>
        </form>

        {submittedFeedback ? <FeedbackDisplay feedback={submittedFeedback} /> : null}
      </section>
    </main>
  )
}

export default UserFeedback
