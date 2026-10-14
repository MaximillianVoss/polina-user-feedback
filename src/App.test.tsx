import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'
import App from './App'

afterEach(cleanup)

describe('UserFeedback', () => {
  test('requires both name and message before displaying feedback', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Please enter both your name and message.',
    )
    expect(screen.queryByRole('heading', { name: 'Submitted feedback' })).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Name'), 'Polina')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Please enter both your name and message.',
    )
  })

  test('shows submitted values and timestamp, then clears the form', async () => {
    const user = userEvent.setup()
    const { container } = render(<App />)
    const nameInput = screen.getByLabelText('Name')
    const messageInput = screen.getByLabelText('Message')

    await user.type(nameInput, '  Polina  ')
    await user.type(messageInput, '  The course examples are clear.  ')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('heading', { name: 'Submitted feedback' })).toBeInTheDocument()
    expect(screen.getByText('Polina')).toBeInTheDocument()
    expect(screen.getByText('The course examples are clear.')).toBeInTheDocument()
    expect(nameInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    const timestamp = container.querySelector('time')
    expect(timestamp).toBeInTheDocument()
    expect(timestamp).toHaveAttribute('datetime', expect.stringMatching(/^\d{4}-\d{2}-\d{2}T/))
    expect(timestamp).not.toHaveTextContent(/^\s*$/)
  })
})
