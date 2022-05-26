import React from 'react'

export type onHandleChangeArgsProps = {
  checked: boolean
  text: string
}

export type onHandleChangeProps = {
  onHandleChange: (props: onHandleChangeArgsProps) => void
}

export type ItemProps = {
  text: string
  isChecked: boolean
}

type ListItemComponentProps = ItemProps & onHandleChangeProps

const ListItem = ({ text, isChecked, onHandleChange }: ListItemComponentProps) => {
  return (
    <li
      className="inline-flex items-center justify-start p-2 my-1 list-none border-2 bg-stone-300 border-stone-500"
      role="listitem"
    >
      <input
        type="checkbox"
        name={text}
        id={`${text}-id`}
        checked={isChecked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onHandleChange({
            checked: event.target.checked,
            text: event.target.name,
          })
        }}
      />
      <label className={`ml-2 truncate ${isChecked && 'line-through'}`} htmlFor={`${text}-id`}>
        {text}
      </label>
    </li>
  )
}

ListItem.defaultProps = {
  text: 'No text added',
  isChecked: false,
  onHandleChange: () => {},
}

export default ListItem
