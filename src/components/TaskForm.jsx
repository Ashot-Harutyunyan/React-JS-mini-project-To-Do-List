import React from 'react'

function TaskForm({ handleSubmit, error }) {
  
  return (<form action="" 
       style={{ gap: error[0] ? '25px' : '10px', margin: error[1] ? '25px auto' : '0px auto' }} 
      onSubmit={handleSubmit}>

      <div className='div-input'>
        <input type="text" name="Title" placeholder='Title'
          style={{ border: error[0] ? '1px solid crimson' : '1px solid black' }} />
        <p className={error[0] ?  'errorBlock' : 'errorNone'}>The title field must be filled in</p>
      </div>

      <div className='div-textarea'>
        <textarea name="Description" placeholder='Description' 
          style={{ border: error[1] ? '1px solid crimson' : '1px solid black' }} />
        <p className={error[1] ?  'errorBlock' : 'errorNone'}>The description field must be filled in</p>
      </div>

      <button>Add Task List</button>
    
  </form>)
}

export default React.memo(TaskForm) 