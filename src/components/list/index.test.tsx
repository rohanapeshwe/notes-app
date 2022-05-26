import List from './index'
import { screen, render, within } from '@testing-library/react'
import { ItemProps } from '../item'
import userEvent from '@testing-library/user-event'

describe('Test List', () => {
  test('should empty when there is no item in list', () => {
    render(<List />)
    expect(screen.getByRole('list', { name: 'todo-list' })).toBeEmptyDOMElement()
  })

  test('should show list when there is data', () => {
    const items: ItemProps[] = [
      {
        isChecked: false,
        text: 'todo item 1',
      },
      {
        isChecked: true,
        text: 'todo item 2',
      },
    ]

    render(<List items={items} />)
    const renderedList = screen.getByRole('list', { name: 'todo-list' })
    const { getAllByRole } = within(renderedList)
    const renderedItems = getAllByRole('listitem')
    expect(renderedItems.length).toBe(2)
  })

  test('should call onHandleChange function when any items checkbox is checked ', async () => {
    const items: ItemProps[] = [
      {
        isChecked: false,
        text: 'todo item 1',
      },
      {
        isChecked: true,
        text: 'todo item 2',
      },
    ]

    const handleChange = jest.fn()

    render(<List items={items} onHandleChange={handleChange} />)
    const renderedList = screen.getByRole('list', { name: 'todo-list' })
    const { getAllByRole } = within(renderedList)
    const renderedItems = getAllByRole('checkbox')
    await userEvent.click(renderedItems[0])
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
