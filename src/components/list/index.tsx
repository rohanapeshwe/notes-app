import React from 'react'
import Item, { ItemProps, onHandleChangeArgsProps } from '../item'

type ListProps = {
  items: ItemProps[]
  onHandleChange: (args: onHandleChangeArgsProps) => void
  onHandleAdd: (args: onHandleChangeArgsProps) => void
  onHandleRemove: (args: onHandleChangeArgsProps) => void
}

const List = ({ items, onHandleChange }: ListProps) => {
  return (
    <ul aria-label="todo-list" className="flex flex-col w-full">
      {items.map((item: ItemProps) => (
        <Item key={item.text} {...item} onHandleChange={onHandleChange} />
      ))}
    </ul>
  )
}

List.defaultProps = {
  items: [],
  onHandleChange: () => {},
  onHandleAdd: () => {},
  onHandleRemove: () => {},
}

export default List
