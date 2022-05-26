import { useReducer } from 'react'
import List from './components/list'
import { actions, initialState, reducer } from './reducers/store'
import { onHandleChangeArgsProps } from './components/item'
import Input from './components/input'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = ({ checked, text }: onHandleChangeArgsProps) => {
    dispatch({
      type: actions.ITEM_UPDATE,
      payload: {
        isChecked: checked,
        text,
      },
    })
  }

  const handleAdd = (text: string) => {
    dispatch({
      type: actions.ITEM_ADD,
      payload: {
        isChecked: false,
        text,
      },
    })
  }

  const handleRemove = ({ checked, text }: onHandleChangeArgsProps) => {
    dispatch({
      type: actions.ITEM_REMOVE,
      payload: {
        isChecked: checked,
        text,
      },
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-2 bg-stone-300">
      <h1 className="mb-4 font-sans text-3xl font-extrabold text-stone-700">Todos App</h1>
      <div className="w-72">
        <Input onEnter={handleAdd} />
        <List items={state.items} onHandleChange={handleChange} onHandleRemove={handleRemove} />
      </div>
    </div>
  )
}

export default App
