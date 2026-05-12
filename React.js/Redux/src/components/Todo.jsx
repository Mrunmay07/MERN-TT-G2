import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { addTask } from "../store/Store";

function Todo() {
  const [task , setTask]=  useState('')
 

  const todos = useSelector((state) => state.task);
  const dispatch = useDispatch() // function 
  

  function handleSubmit(e){
    e.preventDefault()
    dispatch(addTask(task))
    setTask('')
  }

  function handleChange(e){
    setTask(e.target.value)
  }
 

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange}/>
        <button >ADD</button>
      </form>

      <ul className="tasks-container">
        {todos.map((currTask, index) => {
          return (
            <div>
              <li>
                {index}.{currTask}
              </li>
              <button>
                <MdDelete />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
