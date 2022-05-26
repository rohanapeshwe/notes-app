import React, { useState } from 'react'

export type InputProps = {
  onEnter: (args: string) => void
}

const Input = ({ onEnter }: InputProps) => {
  const [text, setText] = useState<string>('')

  const onHandleEnter = () => {
    onEnter(text)
    setText('')
  }

  return (
    <input
      className="w-full p-2 mb-4 border border-gray-900 border-solid rounded focus:outline-blue-700 focus:outline-2"
      type="text"
      id="item-input"
      placeholder="Item to be completed"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.key === 'Enter') {
          onHandleEnter()
        }
      }}
    />
  )
}

Input.defaultProps = {
  onEnter: () => {},
}

export default Input
