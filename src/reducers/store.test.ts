import { reducer, initialState, actions } from './store'

describe('Test reducer and its actions', () => {
  test('should return the initial state', () => {
    expect(initialState).toEqual({ items: [] })
  })

  test('should add item with checked as false', () => {
    expect(
      reducer(initialState, { type: actions.ITEM_ADD, payload: { text: 'item', isChecked: false } })
    ).toEqual({
      items: [
        {
          isChecked: false,
          text: 'item',
        },
      ],
    })
  })

  test('should remove item', () => {
    const firstState = reducer(initialState, {
      type: actions.ITEM_ADD,
      payload: { isChecked: false, text: 'item' },
    })
    const secondState = reducer(firstState, {
      type: actions.ITEM_ADD,
      payload: { isChecked: false, text: 'item1' },
    })

    expect(
      reducer(secondState, {
        type: actions.ITEM_REMOVE,
        payload: { isChecked: false, text: 'item1' },
      })
    ).toEqual(firstState)
  })

  test('should update ischecked', () => {
    const firstState = reducer(initialState, {
      type: actions.ITEM_ADD,
      payload: { isChecked: false, text: 'item' },
    })
    expect(
      reducer(firstState, { type: actions.ITEM_UPDATE, payload: { isChecked: true, text: 'item' } })
    ).toEqual({
      items: [
        {
          isChecked: true,
          text: 'item',
        },
      ],
    })
  })
})
