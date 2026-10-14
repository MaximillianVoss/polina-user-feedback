[Suomenkielinen tehtävänanto (README.fi.md)](../README.fi.md)

# User Feedback (3 points)
Create a React component `UserFeedback` that collects user feedback through a simple form and displays the submitted information on the screen.

Feedback form contains the following elements:
- A Name input (`<input>`)
- A Message textarea (`<textarea>`)
- A Send button

### Display Submitted Feedback:
- When the user clicks Send, show their name and message below the form.
- Clear the input fields after submission.

Requirements:
- Validate that both fields are filled before displaying the feedback

### Bonus:
- Add a timestamp to show when the feedback was submitted
- Keep your feedback display logic in a separate component

> [!TIP]
> You can create a state like `const [isSubmitted, setIsSubmitted] = useState(false)`. Use it to control what gets rendered and when

