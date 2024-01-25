import React,{useState} from 'react'
import TodoList from './TodoList';

const App = () => {

  const [task,settask] = useState("");
  const[todos,setTodos] = useState([]);

  const changeHandler = e =>{
      settask(e.target.value);
  }

  const submitHandler = e =>{
     e.preventDefault();
     const newTodos = [...todos,task]
     setTodos(newTodos);
     settask("")

  }

  const deleteHandler = (indexs) =>{
 const newtodos = todos.filter((todo,index) => indexs != index);
setTodos(newtodos)
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='enter anything' value={task} onChange={changeHandler}/>
            <input type='submit' placeholder='submit'  />
        </form>
        <TodoList todoList={todos} deleteHandler={deleteHandler}/>
       
        </center>
    </div>
  )
}

export default App