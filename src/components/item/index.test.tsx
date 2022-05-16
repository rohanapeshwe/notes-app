import Item from './index'
import { screen, render } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

describe('Test item row', () => {
  test('should render empty row', () => {
    render(<Item />)
    expect(screen.getByText('No text added')).toBeInTheDocument()
  })

  test('should render with text if provided', () => {
    render(<Item text="My note" />)
    expect(screen.getByText('My note')).toBeInTheDocument()
  })

  test('should render with default completed as  to false', () => {
    render(<Item />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  test('should render with completed as value passed', () => {
    render(<Item isChecked={true} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  test('should call onHandleChange when clicked on checkbox', async () => {
    const onHandleChange = jest.fn()
    render(<Item text="My note" onHandleChange={onHandleChange} />)

    const checkbox = screen.getByRole('checkbox', { name: 'My note' })
    await UserEvent.click(checkbox)
    expect(onHandleChange).toHaveBeenCalledTimes(1)
    expect(onHandleChange).toHaveBeenCalledWith({
      checked: true,
      text: 'My note',
    })
  })
})
