export type State = {
  items: {
    text: string
    isChecked: boolean
  }[]
}

export type Action = {
  type: string
  payload: {
    text: string
    isChecked: boolean
  }
}

export const initialState: State = {
  items: [],
}

export const actions = {
  ITEM_ADD: 'item_add',
  ITEM_REMOVE: 'item_remove',
  ITEM_UPDATE: 'item_update',
}

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actions.ITEM_ADD:
      return { items: [...state.items, { text: action.payload.text, isChecked: false }] }
      break

    case actions.ITEM_REMOVE:
      return { items: state.items.filter((item) => item.text !== action.payload.text) }
      break

    case actions.ITEM_UPDATE: {
      const itemAt = state.items.findIndex((item) => item.text === action.payload.text)
      if (itemAt >= 0) {
        state.items[itemAt].isChecked = action.payload.isChecked
      }

      return {
        items: [...state.items],
      }
      break
    }
    default:
      throw new Error(`unknown action type: ${action.type}`)
  }
}
