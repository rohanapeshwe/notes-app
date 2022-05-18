import React from 'react'

export type InputProps = {
  onEnter: (args: string) => void
}

const Input = ({ onEnter }: InputProps) => {
  return (
    <div>
      <input
        className="p-2 border border-gray-900 border-solid rounded w-96 focus:outline-blue-700 focus:outline-2"
        type="text"
        id="item-input"
        placeholder="Item to be completed"
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            onEnter((e.target as HTMLInputElement).value)
          }
        }}
      />
    </div>
  )
}

Input.defaultProps = {
  onEnter: () => {},
}

export default Input
