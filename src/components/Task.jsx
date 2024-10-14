import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCircleExclamation, faCircleXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

                                                     
function Task({ task, index, handleRemove, handleButtonFunction }) {
        
    return (<div className='add-task-list' style={{ border: task.important ? '2px solid #008000' : '1px solid #213547' }}>
      
        <div className='modalWindow' style={{ display: task.modalWindow ? 'block' : 'none' }}>
          <p>Are you sure you want to delete this task list?</p>
          <div>
            <button onClick={() => handleRemove(index)}>Yes</button>
            <button onClick={() => handleButtonFunction(index, 'modalWindow')}>No</button>
          </div>
        </div>

        <div className='title-task-list' style={{ border: task.important ? '2px solid #008000' : '1px solid #213547' }}>
          <span>Title</span>
          <p>{task.completed ? <del>{task.Title}</del> : task.Title}</p>
        </div>

        <div className='container-icon'>
          <FontAwesomeIcon icon={faCircleExclamation} className='icon-important' style={{ color: task.important ? '#008000' : '#213547' }} 
          onClick={() => handleButtonFunction(index, 'important')} />
          <FontAwesomeIcon icon={faPenToSquare} className='icon-editing' onClick={() => handleButtonFunction(index, 'edit')} />
          <FontAwesomeIcon icon={faTrash} className='icon-remove' onClick={() => handleButtonFunction(index, 'modalWindow')} />
          <button onClick={() => handleButtonFunction(index, 'completed')}>
            {task.completed ? 
              <div>
                <span>completed</span>
                <FontAwesomeIcon icon={faCheck} className='icon-completed'/>
              </div> 
              : 
              <div>
                <span>not completed</span>
                <FontAwesomeIcon icon={faCircleXmark} className='icon-completed not'/>
              </div>
            }
          </button>
        </div>

        <div className='description-task-list' style={{ border: task.important ? '2px solid #008000' : '1px solid #213547' }}>
          <span>Description</span>
          <p>{task.completed ? <del>{task.Description}</del> : task.Description}</p>
        </div>
      
    </div>)
  }

export default Task