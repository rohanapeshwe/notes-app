import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Item from './components/item'

function App() {
  const title =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facilis magnam nulla labore molestiae esse officia dolorum veritatis cumque culpa fuga tempore! Sunt ex ipsa ab, iste in reiciendis natus.'
  return <Item text={title} />
}

export default App
