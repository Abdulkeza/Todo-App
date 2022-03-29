import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


const TodoList = () =>{

const todos = useSelector((state) =>{
  return state.tasks;
})

  return (
    <ul className="tasks-list">
    <div>
      {todos.map((todo) =>(
        <TodoItem id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </div>

    </ul>
  );
}

export default TodoList;
