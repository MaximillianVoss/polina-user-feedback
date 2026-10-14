export type SubmittedFeedback = Readonly<{
  name: string
  message: string
  submittedAt: string
}>

type FeedbackDisplayProps = Readonly<{
  feedback: SubmittedFeedback
}>

export default function FeedbackDisplay({ feedback }: FeedbackDisplayProps) {
  const submittedDate = new Date(feedback.submittedAt)

  return (
    <section className="submitted-feedback" aria-labelledby="submitted-title" aria-live="polite">
      <h2 id="submitted-title">Submitted feedback</h2>
      <dl>
        <div>
          <dt>Name</dt>
          <dd>{feedback.name}</dd>
        </div>
        <div>
          <dt>Message</dt>
          <dd>{feedback.message}</dd>
        </div>
        <div>
          <dt>Submitted</dt>
          <dd>
            <time dateTime={feedback.submittedAt}>{submittedDate.toLocaleString()}</time>
          </dd>
        </div>
      </dl>
    </section>
  )
}
