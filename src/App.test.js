import { render, screen } from '@testing-library/react'
import App from './App'

test('Development Page Renders', () => {
  render(<App />)
  const message = screen.getByText(/Development Server Running/)
  expect(message).toBeInTheDocument()
})
