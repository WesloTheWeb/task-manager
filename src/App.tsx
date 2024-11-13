import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header';
import InputTask from './components/Input/InputTask';
import TasksList from './components/TasksList/TasksList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <InputTask />
      </div>
      <TasksList />
    </>
  )
}

export default App;

// TODO Endpoint for adding tasks.
// ? I added a endpoint for fetching and the TasksList