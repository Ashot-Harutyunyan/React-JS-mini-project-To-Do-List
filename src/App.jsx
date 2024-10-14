import './app.style.scss'
import { useEffect, useState, useCallback } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  const [todoList, setTodoList] = useState(() => {
    const list = localStorage.getItem('products')
    return list ? JSON.parse(list) : []
  })

  const [error, setError] = useState(new Array(2).fill(false))

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(todoList))
  }, [todoList])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const { Title: { value: Title }, Description: { value: Description } } = e.target
    const result = {
      Title,
      Description,
      important: false,
      completed: false,
      modalWindow: false,
      edit: false
    }
    if (!handleValidate(result)) return
    setTodoList(prev => [...prev, result])
    e.target.reset()
  }, [])

  const handleValidate = useCallback((arg) => {
    const arrError = []
    let boolean = true

    for (let key in arg) {
      if (arg[key] === '') {
        arrError.push(true)
        boolean = false
      } else {
        arrError.push(false)
      }
    }

    setError(arrError)
    return boolean
  }, [])

  const handleEditSubmit = useCallback((e) => {
    e.preventDefault()
    const { Title: { value: Title }, Description: { value: Description } } = e.target
    const editResult = {
      Title,
      Description,
      important: false,
      completed: false,
      modalWindow: false,
      edit: false
    }

    const editErr = []
    editErr.push(editResult.Title === '' ? true : false)
    editErr.push(editResult.Description === '' ? true : false)
    
    if (editErr[0] || editErr[1]) return
    
    const arg = +e.target.dataset.n
    setTodoList(prev => prev.map((task, i) => (i === arg ? editResult : task)))
    e.target.reset()
    
  }, [])

  const handleRemove = useCallback((index) => {
    setTodoList(prev => prev.filter((_, i) => i !== index))
  }, [])

  const handleButtonFunction = useCallback((index, arg) => {
    setTodoList(prev => prev.map((task, i) => i === index ? { ...task, [arg]: !task[arg] } : task))
  }, [])

  return (<>
    
      <h1 className='title'>To-Do List </h1>
      <div className='to-do-list'>
        <TaskForm 
          handleSubmit={handleSubmit}
          error={error}
        />
        <TaskList 
          todoList={todoList}
          handleRemove={handleRemove}
          handleButtonFunction={handleButtonFunction}
          handleEditSubmit={handleEditSubmit}
        />
      </div>
    
  </>)
}

export default App