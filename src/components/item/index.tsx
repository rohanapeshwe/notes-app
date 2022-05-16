import React from 'react'

export type onHandleChangeProps = {
  checked: boolean
  text: string
}

export type ItemProps = {
  text: string
  isChecked: boolean
  onHandleChange: (props: onHandleChangeProps) => void
}

const Item = ({ text, isChecked, onHandleChange }: ItemProps) => {
  return (
    <li
      className="inline-flex items-center justify-start w-64 p-2 list-none border-2 border-stone-500"
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
      <label className="ml-2 truncate" htmlFor={`${text}-id`}>
        {text}
      </label>
    </li>
  )
}

Item.defaultProps = {
  text: 'No text added',
  isChecked: false,
  onHandleChange: () => {},
}

export default Item
