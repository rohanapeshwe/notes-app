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
      return {
        items: [...state.items.filter((item) => item.text !== action.payload.text), action.payload],
      }
      break
    }
    default:
      throw new Error(`unknown action type: ${action.type}`)
  }
}
