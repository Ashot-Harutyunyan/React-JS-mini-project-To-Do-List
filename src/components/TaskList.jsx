import React from 'react'
import Task from './Task'
import EditTaskForm from './EditTaskForm'

function TaskList({ todoList, handleRemove, handleButtonFunction, handleEditSubmit }) {
    
    return (<div className='container-add-task-list'>
      
        {todoList.map((task, index) => (
          task.edit ? 
            <EditTaskForm 
              key={index} 
              task={task} 
              index={index} 
              handleEditSubmit={handleEditSubmit} 
            /> 
            : 
            <Task 
              key={index} 
              task={task} 
              index={index} 
              handleRemove={handleRemove}
              handleButtonFunction={handleButtonFunction}
            />
        ))}
      
    </div>)
  }

export default TaskList