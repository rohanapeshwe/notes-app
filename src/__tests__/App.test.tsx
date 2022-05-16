import { render, screen } from '@testing-library/react'

// To Test
import App from '../App'

// Tests
test('Renders main page correctly', async () => {
  // Setup
  render(<App />)
  const buttonCount = await screen.findByRole('button')
  expect(buttonCount.innerHTML).toBe('count is: 0')
})
