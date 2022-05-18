import Input from './index'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Test Input field', () => {
  test('should render with placeholder', () => {
    render(<Input />)
    expect(screen.getByPlaceholderText(/item to be completed/i)).toBeInTheDocument()
  })

  test('should call onEnter when return or enter is hit', async () => {
    const callBack = jest.fn()
    render(<Input onEnter={callBack} />)

    const input = screen.getByPlaceholderText(/item to be completed/i)
    await userEvent.type(input, 'New Item')
    await userEvent.keyboard('{Enter}')
    expect(callBack).toHaveBeenCalledTimes(1)
  })

  test('should call onEnter with value of textbox', async () => {
    const callBack = jest.fn()
    render(<Input onEnter={callBack} />)

    const input = screen.getByPlaceholderText(/item to be completed/i)
    await userEvent.type(input, 'New Item')
    await userEvent.keyboard('{Enter}')
    expect(callBack).toHaveBeenCalledWith('New Item')
  })
})
