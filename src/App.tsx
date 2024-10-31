import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header';
import InputTask from './components/Input/InputTask';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <InputTask />
      </div>
    </>
  )
}

export default App;
