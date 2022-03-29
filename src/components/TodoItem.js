import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';

const TodoItem = ({id, title}) =>{

  const dispatch = useDispatch();

  const removeTask = ()=>{
    dispatch(
      deleteTask({
        id: id
      })
    )
  }

  const handleDelete = ()=>{
      removeTask()
  }


  return (
    <li className="task-item">  
    
    <div>
      { title }
    </div>
    <div>
    <button className="delete-button " onClick={handleDelete}>Delete</button>
    </div>
    </li>
  );
}

export default TodoItem;
