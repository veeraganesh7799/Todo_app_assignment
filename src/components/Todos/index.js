import React from 'react'
import {MdDelete} from 'react-icons/md'
import './index.css'

const Todos = ({todoItem,deleteTodo,completedTodo}) => {
  return (
    <li className= 'todo-item' >
      <p className={todoItem.isCompleted ? 'todo-item-completed name': 'name'}>{todoItem.todo}</p>
      <div className='crud-opertions'>
      <button className= {todoItem.isCompleted ? 'complete-btn' : 'completed-btn'} type='button' onClick={()=>completedTodo(todoItem.id)}>{todoItem.isCompleted ? "Pending" : "Completed"}</button>
      <div className='delete-btn' type='button' onClick={()=>deleteTodo(todoItem.id)}><MdDelete className='delete-icon'/></div>
      </div>
    </li>
  )
}

export default Todos
