import React,{useState,useEffect} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {v4} from 'uuid'
import Todos from './components/Todos'
import './App.css';

function App() {
      const getTodoList = JSON.parse(localStorage.getItem('getTodoItems'))
      const [todo, setTodo] = useState('')
      const [todoList, setTodoList] = useState(getTodoList !== null ? getTodoList : [])
      

      const addTodoHandler = (event) => {
        event.preventDefault()
        const data = {
            id: v4(),
            todo,
            isCompleted: false
        }
        if (todo.length !== 0){
          setTodoList([...todoList,data])
        }else{
          alert('Please Enter Your Task')
        }
        setTodo('')
      }

      const deleteTodo = (id) => {
         const filtered = todoList.filter(each=>each.id !== id)
         setTodoList(filtered)
      }

      const completedTodo = (id) => {
        const completedTodo = todoList.map(each=>{
          if (each.id === id){
            return {...each, isCompleted: !each.isCompleted}
          }
          return each
        })
        setTodoList(completedTodo)
        
      }
     

      useEffect(()=>{
        localStorage.setItem('getTodoItems',JSON.stringify(todoList))
      })

      const completedLists = todoList.filter(each=>each.isCompleted===true)
      console.log(completedLists)
      
      
      return (
        <div className='main-container'>
        <div className='todo-container'>
          <div className='todo-list-details'>
          <h1 className='heading'>Todos</h1>
          <form className='form-container' onSubmit={addTodoHandler}>
            <div className='input-container'>
              <input className='input-box' type='text' placeholder='Enter Your Task' value={todo} onChange={(e)=>setTodo(e.target.value)} />
              <div className='btn-container'>
               <button type='submit' className='add-btn' ><AiOutlinePlus className='plus-btn'/></button>
              </div>
            </div>
          </form>
          <ul className='todo-lists'>
              {todoList.map(each=>(
                <Todos key={each.id} todoItem={each} deleteTodo={deleteTodo} completedTodo={completedTodo}/>
              ))}
          </ul>
          </div>
          <div className='completed-lists-container'>
          <h2 className='completed-heading'>Completed Tasks  {completedLists.length !== 0 ? - completedLists.length:''}</h2>
          <ul className='completed-todos-list'>
            {completedLists.length !== 0 ? <>{completedLists.map(each=>(
              <li key={each.id} className='each-todo'>{each.todo}</li>
            ))}</> : <p className='no-tasks-yet-compelted'>No Completed Tasks</p>}
          </ul>
          </div>
        </div>
        
        </div>
      )
    }
    
    export default App;

