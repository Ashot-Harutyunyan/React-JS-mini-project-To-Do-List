import React from 'react'

function EditTaskForm({ task, index, handleEditSubmit }) {
    
    return (<form action="" data-n={index} 
        style={{ gap: '10px', margin: '10px auto' }} 
        onSubmit={handleEditSubmit}>
      
        <div className='div-input'>
          <input type="text" name="Title" placeholder='Title' defaultValue={task.Title} />
        </div>

        <div className='div-textarea'>
          <textarea name="Description" placeholder='Description' defaultValue={task.Description} /> 
        </div>

        <button>Edit Task List</button>
      
    </form>)
  }

export default EditTaskForm